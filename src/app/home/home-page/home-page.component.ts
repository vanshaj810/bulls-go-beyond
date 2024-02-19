// import { TestimonialPageComponent } from './../../testimonial/testimonial-page/testimonial-page.component';
import {
	Component,
	ElementRef,
	HostListener,
	OnInit,
	Renderer2,
	ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../../shared/services/config.service';
import { Header } from '../models/header.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
	header$: Observable<Header>;
	animateFromLeft = false;
	animateFromBottom = false;
	@ViewChild('fadeLeft') boxElement: ElementRef;
	@ViewChild('whyChoose') chooseElement: ElementRef;

	constructor(
		private config: ConfigService,
		private router: Router,
		private renderer: Renderer2
	) {}

	ngOnInit() {
		this.getPageData('pages', 7);
	}

	@HostListener('window:scroll', []) onWindowScroll() {
		if (window.pageYOffset > 120 && !this.animateFromLeft) {
			// Adjust the scroll threshold as needed
			this.animateBox();
		}
		if (window.pageYOffset > 900 && !this.animateFromBottom) {
			// Adjust the scroll threshold as needed
			this.animateBoxBottom();
		}
	}

	animateBox() {
		const box = this.boxElement.nativeElement;
		this.renderer.addClass(box, 'animate-from-left');
		this.animateFromLeft = true;
		// Remove the scroll event listener to prevent the animation from firing again
		window.removeEventListener('scroll', this.onWindowScroll);
	}
	animateBoxBottom() {
		const box = this.chooseElement.nativeElement;
		this.renderer.addClass(box, 'animate-from-bottom');
		this.animateFromBottom = true;
		// Remove the scroll event listener to prevent the animation from firing again
		window.removeEventListener('scroll', this.onWindowScroll);
	}

	getPageData(database: string, id?: number): void {
		this.header$ = this.config.getSettings(database, id);
	}
	loadMoreClicked() {
		// Navigate to the desired component
		this.router.navigate(['/testimonials']); // Replace 'other-component' with the path of your desired component
	}
}
