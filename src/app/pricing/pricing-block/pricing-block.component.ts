import { Component, Input } from '@angular/core';
import { Plan } from '../models/plan.model';
import { RazorpayService } from './razorpay.service';

declare var Razorpay: any;
@Component({
	selector: 'app-pricing-block',
	templateUrl: './pricing-block.component.html',
})
export class PricingBlockComponent {
	@Input() plan: Plan;

  constructor(private razorpayService: RazorpayService) { }

  processPayment() {
    // Add your payment processing logic here
    // This function will be triggered when the form is submitted
    console.log("Processing payment...");
    // Example: You might want to send the payment data to a backend server for processing
    // For now, let's just log a message to the console
  }



  // initiatePayment(): void {
  //   const orderData = {
  //     // Provide necessary order details
  //     // Example: amount, currency, etc.
  //     amount: this.plan.price+'00',
  //     currency: "INR",
  //     receipt: this.razorpayService.generateReceiptId(),
  //   };

  //   this.razorpayService.createOrder(orderData).subscribe(
  //     (order) => {
  //       // On successful order creation, initiate Razorpay checkout
  //       const options = {
  //         key: 'rzp_test_tecEBN4xpbURcc', // Your Razorpay API key
  //         amount: order.amount,
  //         currency: order.currency,
  //         order_id: order.id,
  //         name: 'BULLS GO BEYOND',
  //         description: 'Purchase Description',
  //         image: 'https://drive.google.com/file/d/10JRDBvHznm1bLue4WsWdiFqWomYL86lV/view?usp=drive_link', // URL to your logo
  //         // handler: (response: any) => {
  //         //   // Payment success handler
  //         //   console.log("response----------------",response);
  //         //   const paymentData = {
  //         //     razorpay_order_id: response.razorpay_order_id,
  //         //     razorpay_payment_id: response.razorpay_payment_id,
  //         //     razorpay_signature: response.razorpay_signature
  //         //   };

  //         //   this.razorpayService.validatePayment(paymentData).subscribe(
  //         //     (res) => {
  //         //       // Handle successful payment validation
  //         //       console.log(res);
  //         //     },
  //         //     (error) => {
  //         //       // Handle payment validation error
  //         //       console.error(error);
  //         //     }
  //         //   );
  //         // },
  //         prefill: {
  //           name: 'Bulls go beyond',
  //           email: 'vanshaj810@gmail.com',
  //           contact: '8076153645'
  //         },
  //         theme: {
  //           color: '#5491f3' // Customize theme color
  //         }
  //       };

  //       const successCallback = (paymentid: any) => {
  //         console.log(paymentid);
  //       }

  //       const failureCallback = (e: any) => {
  //         console.log(e);
  //       }

  //       // const razorpay = new RazorPay(options);
  //       Razorpay.open(options,successCallback, failureCallback)
  //     },
  //     (error) => {
  //       // Handle order creation error
  //       console.error(error);
  //     }
  //   );
  // }
  initiatePayment() {
    const RozarpayOptions = {
      description: 'Sample Razorpay demo',
      currency: 'INR',
      amount: this.plan.price+'00',
      name: 'Bull Go Beyond',
      key: 'rzp_test_tecEBN4xpbURcc',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bullsgobeyond.com%2F&psig=AOvVaw0nVfwETTkigEh9yLd5h5UE&ust=1708353165098000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPC7986NtYQDFQAAAAAdAAAAABAE',
      prefill: {
        name: 'Bulls go beyond',
        email: 'vanshaj810@gmail.com',
        phone: '9898989898'
      },
      theme: {
        color: '#5491f3'
      },
      modal: {
        ondismiss:  () => {
          console.log('dismissed')
        }
      }
    }

    const successCallback = (paymentid: any) => {
      console.log(paymentid);
    }

    const failureCallback = (e: any) => {
      console.log(e);
    }

    Razorpay.open(RozarpayOptions,successCallback, failureCallback);
  }
}
