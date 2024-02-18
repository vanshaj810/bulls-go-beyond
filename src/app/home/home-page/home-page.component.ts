import { TestimonialPageComponent } from './../../testimonial/testimonial-page/testimonial-page.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../../shared/services/config.service';
import { Header } from '../models/header.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
  // styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
	header$: Observable<Header>;

	constructor(private config: ConfigService,
    private router: Router) {}

	ngOnInit() {
		this.getPageData('pages', 7);
	}

	getPageData(database: string, id?: number): void {
		this.header$ = this.config.getSettings(database, id);
	}
  loadMoreClicked() {
    // Navigate to the desired component
    this.router.navigate(['/testimonials']); // Replace 'other-component' with the path of your desired component
  }
}
