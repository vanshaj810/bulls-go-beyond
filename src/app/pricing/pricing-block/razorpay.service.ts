import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {

  constructor(private http: HttpClient) { }

  createOrder(orderData: any): Observable<any> {
    return this.http.post<any>('http://localhost:5000/order', orderData);
  }

  validatePayment(paymentData: any): Observable<any> {
    return this.http.post<any>('http://localhost:5000/order/validate', paymentData);
  }

  generateReceiptId(): string {
    const timestamp = new Date().getTime();
    const uniqueId = Math.random().toString(36).substring(7); // Generate a random string
    return `receipt_${timestamp}_${uniqueId}`;
  }
}
