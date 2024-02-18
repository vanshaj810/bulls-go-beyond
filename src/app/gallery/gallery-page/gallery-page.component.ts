import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { Image } from '../models/image.model';

@Component({
	selector: 'app-gallery-page',
	templateUrl: './gallery-page.component.html',
})
export class GalleryPageComponent implements OnInit {
	images$: Observable<Image[]> = new Observable();
  formData = {
    name: '',
    email: '',
    number: '',
    message: ''
  };

	constructor(private config: ConfigService) {}

	ngOnInit() {
		this.getBlockData('images');
	}

	getBlockData(database: string) {
		this.images$ = this.config.getSettings(database);
	}
  submitForm() {
    // Here you can handle form submission logic like sending data to backend
    console.log(this.formData);
    const body = `Name: ${this.formData.name}\nPhone: ${this.formData.number}\nEmail: ${this.formData.email}\nMessage: ${this.formData.message}`;
    const subject = encodeURIComponent('Contact Us');
    const email = encodeURIComponent('your-email@example.com');
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(body)}`;

    // Open default email client with pre-filled email
    window.location.href = mailtoLink;

    // Reset the form after submission
    this.formData = {
      name: '',
      email: '',
      number: '',
      message: ''
    };

    // Show success alert
    window.alert('Form submitted successfully!');
  }


  openEmailClient() {
    const subject = encodeURIComponent('Contact Us');
    const email = encodeURIComponent('your-email@example.com');
    const body = encodeURIComponent(
    `Name: ${this.formData.name}
    Phone: ${this.formData.number}
    Email: ${this.formData.email}
    Message: ${this.formData.message}`);
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  }
}
