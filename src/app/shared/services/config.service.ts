import { Injectable } from '@angular/core';
import { configuration } from './configuration';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ConfigService {
	config = configuration;
	apiUrl = 'api/posts';
  nav_bar_elements = [
    {
        "id": 1,
        "title": "Home",
        "link": "/home"
    },
    {
        "id": 2,
        "title": "About",
        "link": "/about"
    },
    {
        "id": 3,
        "title": "Services",
        "link": "/services"
    },
    {
        "id": 4,
        "title": "Gallery",
        "link": "/gallery"
    },
    {
        "id": 5,
        "title": "Testimonials",
        "link": "/testimonials"
    },
    {
        "id": 6,
        "title": "Clients",
        "link": "/clients"
    },
    {
        "id": 7,
        "title": "Pricing",
        "link": "/pricing"
    }
];

	constructor(private http: HttpClient) {}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: Error): Observable<T> => {
			console.error(error);
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		};
	}

	getConfig() {
		return this.config;
	}

	getSettings(database: string, id?: number): Observable<any> {
		const url = id ? `api/${database}/${id}` : `api/${database}`;
		return this.http
			.get<any>(url)
			.pipe(
				catchError(this.handleError(`Error getting data from ${database}`, []))
			);
	}
}
