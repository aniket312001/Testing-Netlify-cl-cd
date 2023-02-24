import { Component, OnInit, AfterViewInit } from '@angular/core';
// import "hammerjs"
import * as Hammer from 'hammerjs';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit,AfterViewInit {


  tinderContainer = document.querySelector('.tinder');
  allCards = document.querySelectorAll('.tinder--card')
  nope = document.getElementById('nope');
  love = document.getElementById('love');

  constructor() { }


    initCards(card, index) {
      var newCards = document.querySelectorAll('.tinder--card:not(.removed)');

      newCards.forEach(function (card, index) {
        card['style'].zIndex = this.allCards.length - index;
        card['style'].transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
        card['style'].opacity = (10 - index) / 10;
      });

      this.tinderContainer.classList.add('loaded');
    }






ngOnInit(): void {

}


ngAfterViewInit(): void {

    this.initCards(null,null);

    this.allCards.forEach(function (el) {
      var hammertime = new Hammer(el);

      hammertime.on('pan', function (event: any) {
        el.classList.add('moving');
      });

      hammertime.on('pan', function (event: { deltaX: string | number; center: { x: number; y: number; }; deltaY: string | number; target: { style: { transform: string; }; }; } | any) {
        if (event.deltaX === 0) return;
        if (event.center.x === 0 && event.center.y === 0) return;

        this.tinderContainer.classList.toggle('tinder_love', event.deltaX > 0);
        this.tinderContainer.classList.toggle('tinder_nope', event.deltaX < 0);

        var xMulti = event.deltaX * 0.03;
        var yMulti = event.deltaY / 80;
        var rotate = xMulti * yMulti;

        event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
      });

      hammertime.on('panend', function (event: { deltaX: number; velocityX: number; target: { classList: { toggle: (arg0: string, arg1: boolean) => void; }; style: { transform: string; }; }; velocityY: number; deltaY: number; }) {
        el.classList.remove('moving');
        this.tinderContainer.classList.remove('tinder_love');
        this.tinderContainer.classList.remove('tinder_nope');

        var moveOutWidth = document.body.clientWidth;
        var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

        event.target.classList.toggle('removed', !keep);

        if (keep) {
          event.target.style.transform = '';
        } else {
          var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
          var toX = event.deltaX > 0 ? endX : -endX;
          var endY = Math.abs(event.velocityY) * moveOutWidth;
          var toY = event.deltaY > 0 ? endY : -endY;
          var xMulti = event.deltaX * 0.03;
          var yMulti = event.deltaY / 80;
          var rotate = xMulti * yMulti;

          event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';
          this.initCards();
        }
      });
    });


    var nopeListener = this.createButtonListener(false);
    var loveListener = this.createButtonListener(true);

    this.nope.addEventListener('click', nopeListener);
    this.love.addEventListener('click', loveListener);



  }





 createButtonListener(love: boolean) {
  return function (event: { preventDefault: () => void; }):any {
    var cards = document.querySelectorAll('.tinder--card:not(.removed)');
    var moveOutWidth = document.body.clientWidth * 1.5;

    if (!cards.length) return false;

    var card = cards[0];

    card.classList.add('removed');

    if (love) {
      card['style'].transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
    } else {
      card['style'].transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
    }

    this.initCards();

    event.preventDefault();
  };
}

}
