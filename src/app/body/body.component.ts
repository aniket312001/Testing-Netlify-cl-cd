import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  // @Input() myname !:String

  constructor() { }

  ngOnInit(): void {
  }

  token:any
  cardCaptureReady = false

  onStripeInvalid( error: any ){
    console.log('Validation Error', error)
  }

  onStripeError( error: any ){
    console.error('Stripe error', error)
  }

  setPaymentMethod( token: any ){
    console.log('Stripe Payment Method', token)
  }

  setStripeToken( token:any ){
    console.log('Stripe Token', token)
  }

  setStripeSource( source:any ){
    console.log('Stripe Source', source)
  }
}
