import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import AdyenCheckout from '@adyen/adyen-web';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  @ViewChild('hook', { static: true }) hook: ElementRef;
  constructor() { }

  async  ngOnInit() {

    const configuration = {
      environment: 'test', // Change to 'live' for the live environment.
      clientKey: 'test_870be2...', // Public key used for client-side authentication: https://docs.adyen.com/development-resources/client-side-authentication
      analytics: {
        enabled: true // Set to false to not send analytics data to Adyen.
      },
      session: {
        id: 'CSD9CAC3...', // Unique identifier for the payment session.
        sessionData: 'Ab02b4c...' // The payment session data.
      },
      onPaymentCompleted: (result, component) => {
          console.info(result, component);
      },
      onError: (error, component) => {
          console.error(error.name, error.message, error.stack, component);
      },
      // Any payment method specific configuration. Find the configuration specific to each payment method:  https://docs.adyen.com/payment-methods
      // For example, this is 3D Secure configuration for cards:
      paymentMethodsConfiguration: {
        card: {
          hasHolderName: true,
          holderNameRequired: true,
          billingAddressRequired: true
        }
      }
    };


    const checkout = await AdyenCheckout(configuration)

    checkout.create('dropin').mount('#dropin-container');
  }

}
