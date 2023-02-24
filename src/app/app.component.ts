import { Component, OnInit, ElementRef,  } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import AdyenCheckout from '@adyen/adyen-web';
import '@adyen/adyen-web/dist/adyen.css';

// import * as tt from '@tomtom-international/web-sdk-maps';


// PZxRgy8X4ieBARTUAdGC8osfAgUimDY0


// import tt from '@tomtom-international/web-sdk-maps';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{



  constructor(){
  //   const map = tt.map({
  //     key: 'PZxRgy8X4ieBARTUAdGC8osfAgUimDY0',
  //     container: 'map'
  // });
  }

  title = 'a';
  name:String = "Aniket Chavan"
  show = true


  data:any = []
  ngOnInit(){

  }


  sendMsg(){

  }










//   private trigger : Subject<any> = new Subject();

//   public webcamImage!: WebcamImage;
//   private nextWebcam: Subject<any> = new Subject();

//   captureImage  = '';


//   public triggerSnapshot(): void {
//     this.trigger.next(1);
//     this.show = false
//   }

// /*------------------------------------------
// --------------------------------------------
// handleImage()
// --------------------------------------------
// --------------------------------------------*/
// public handleImage(webcamImage: WebcamImage): void {
//     this.webcamImage = webcamImage;
//     this.captureImage = webcamImage!.imageAsDataUrl;
//     console.info('received webcam image', this.captureImage);

//     fetch(this.captureImage)
//   .then(res => res.blob())
//   .then(blob => {
//     const file = new File([blob], "File name",{ type: "image/png" })
//     console.log(file)
//   })
// }

// /*------------------------------------------
// --------------------------------------------
// triggerObservable()
// --------------------------------------------
// --------------------------------------------*/
// public get triggerObservable(): Observable<any> {

//     return this.trigger.asObservable();
// }

// /*------------------------------------------
// --------------------------------------------
// nextWebcamObservable()
// --------------------------------------------
// --------------------------------------------*/
// public get nextWebcamObservable(): Observable<any> {

//     return this.nextWebcam.asObservable();
// }


}
function ViewChild(arg0: string, arg1: { static: boolean; }) {
  throw new Error('Function not implemented.');
}

