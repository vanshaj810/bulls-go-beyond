import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
	providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const pages = [
			{
				id: 1,
				name: 'intro',
				tagline: 'SUCCESS',
				title: 'About your trainer',
				description:
					'Harsh Jain is a full-time trader with 5 years of experience in securities markets, commodity markets, forex market, and currency pairs. Harsh Jain is a highly skilled and accomplished trader with a deep passion for financial markets and a proven track record of success.',
			},
			{
				id: 2,
				name: 'clients',
				tagline: 'TRUST',
				title: 'Companies who use our services',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
			},
			{
				id: 3,
				name: 'services',
				tagline: 'BELIEVING',
				title: 'Focusing On What Matters Most',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
			},
			{
				id: 4,
				name: 'testimonials',
				tagline: 'FEEDBACK',
				title: 'What our customers are saying',
				description: '',
			},
			{
				id: 5,
				name: 'pricing',
				tagline: 'YOUR CHOICE',
				title: 'We have the right package for you',
				description: '',
			},
			{
				id: 6,
				name: 'footer',
				tagline: 'Made with ❤ by',
				developer: 'VB-AP',
				developerlink: 'andrewbateman.org',
			},
			{
				id: 7,
				name: 'header',
				tagline: 'Learn to trade in the most simplified way.',
				title:
					'Bulls Go Beyond Academy is the best stock market institute that provides the most simplified and to-the-point stock market course from the scratch for beginners.',
				buttontext: 'START CREATING TODAY',
				buttonlink: '/home',
				image: 'banner-image.jpg',
			},
		];
		const features = [
			{
				id: 1,
				icon: 'graduation-cap',
				title: 'Qualifications',
				description:
					` NISM Certified- Research Analyst, under SEBI (Certifciation of Associated Persons in the Securities Market) Regulations , 2007`,
			},
			{
				id: 2,
				icon: 'briefcase',
				title: 'Work in the Field',
				description:
					`In the quest to achieve financial freedom, Harsh started

          as an individual full time trader and led to building a community of

          like minded professionals on social media platforms such as Instagram and LinkedIn.`,
			},{
				id: 3,
				icon: 'user',
				title: 'Background',
				description:
					``,
			}

		];
		const images = [
			{ id: 1, name: 'gallery-image-1.jpg' },
			{ id: 2, name: 'gallery-image-2.jpg' },
			{ id: 3, name: 'gallery-image-3.jpg' },
			{ id: 4, name: 'gallery-image-4.jpg' },
			{ id: 5, name: 'gallery-image-5.jpg' },
			{ id: 6, name: 'gallery-image-6.jpg' },
		];
		const menu = [
			{ id: 1, title: 'Home', link: '/home' },
			{ id: 2, title: 'About', link: '/about' },
			// { id: 3, title: 'Services', link: '/services' },
			{ id: 4, title: 'Contact Us', link: '/gallery' },
			{ id: 5, title: 'Testimonials', link: '/testimonials' },
			// { id: 6, title: 'Leadership', link: '/clients' },
			{ id: 7, title: 'Online Courses', link: '/pricing' },
		];
		const companies = [
			{
				id: 1,
				name: 'Tree',
				weblink: 'company-logo1.png',
				logo: 'company-logo1.png',
			},
			{
				id: 2,
				name: 'Fingerprint',
				weblink: 'company-logo2.png',
				logo: 'company-logo2.png',
			},
			{
				id: 3,
				name: 'The Man',
				weblink: 'company-logo3.png',
				logo: 'company-logo3.png',
			},
			{
				id: 4,
				name: 'Mustache',
				weblink: 'company-logo4.png',
				logo: 'company-logo4.png',
			},
			{
				id: 5,
				name: 'Goat',
				weblink: 'company-logo5.png',
				logo: 'company-logo5.png',
			},
			{
				id: 6,
				name: 'Justice',
				weblink: 'company-logo6.png',
				logo: 'company-logo6.png',
			},
			{
				id: 7,
				name: 'Ball',
				weblink: 'company-logo7.png',
				logo: 'company-logo7.png',
			},
			{
				id: 8,
				name: 'Cold',
				weblink: 'company-logo8.png',
				logo: 'company-logo8.png',
			},
			{
				id: 9,
				name: 'Cold',
				weblink: 'company-logo9.png',
				logo: 'company-logo9.png',
			},
		];
		const feedback = [
			{
				id: 1,
				name: 'Shivansh Mehta',
				userimage: 'user-1.jpg',
				comments:
					'I recently completed the trading course instructed by Harsh Jain and I must say it was an incredibly informative and well-structured program. The instructor was knowledgeable, and the practical examples provided a clear understanding of trading strategies. I feel more confident and equipped to make informed trading decisions. Thank you for a great learning experience!',
				company: 'April batch',
			},
			{
				id: 2,
				name: 'Vishesh Kedia',
				userimage: 'user-2.jpg',
				comments:
					'I truly appreciate the patience and guidance he provided, which has greatly improved my understanding of trading. I highly recommend Harsh to anyone looking to learn about trading in a comprehensive and thoughtful manner.',
				company: 'May batch',
			},
			{
				id: 3,
				name: 'Ravi Reddy',
				userimage: 'user-3.jpg',
				comments:
					'I had the privilege of learning trading from Harsh (guru) and I must say that their teaching approach was exceptional. Harsh went above and beyond to explain every aspect of trading with great care and detail. Their expertise and dedication to ensuring that we understood each concept thoroughly made the learning experience highly valuable.',
				company: 'September batch',
			},
		];
		const plans = [
			{
				id: 1,
				title: 'PERSONAL',
				subtitle: 'The standard version',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				price: '25000',
				currency: '₹',
				downloads: '5 Downloads',
				extensions: '2 Extensions',
				tutorials: 'Tutorials',
				support: 'Forum Support',
				updates: '1 year free updates',
				buttontext: 'BUY TODAY',
				buttonlink: '#',
				featured: false,
			},
			{
				id: 2,
				title: 'STUDENT',
				subtitle: 'Most popular choice',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				price: '29000',
				currency: '₹',
				downloads: '15 Downloads',
				extensions: '5 Extensions',
				tutorials: 'Tutorials with files',
				support: 'Forum Support',
				updates: '2 year free updates',
				buttontext: 'BUY TODAY',
				buttonlink: '#',
				featured: true,
			},
			{
				id: 3,
				title: 'BUSINESS',
				subtitle: 'For the whole team',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				price: '49000',
				currency: '₹',
				downloads: 'Unlimited Downloads',
				extensions: 'Unlimited Downloads',
				tutorials: 'HD Video Tutorials',
				support: 'Chat Support',
				updates: 'Lifetime free updates',
				buttontext: 'BUY TODAY',
				buttonlink: '#',
				featured: false,
			},
		];
		const websites = [
			{
				id: 1,
				link: 'https://facebook.com/',
				title: 'Facebook',
				target: '_blank',
				username: 'Thor',
				icon: 'facebook',
			},
			// {
			//   id: 2,
			//   link: "https://googleplus.com/",
			//   title: "Google+",
			//   target: "_blank",
			//   username: "+jagmohan",
			//   icon: "google-plus",
			// },
			{
				id: 3,
				link: 'https://twitter.com/',
				title: 'Twitter',
				target: '_blank',
				username: 'joker',
				icon: 'twitter',
			},
			{
				id: 4,
				link: 'https://instagram.com/',
				title: 'Instagram',
				target: '_blank',
				username: 'superman',
				icon: 'instagram',
			},
			// {
			//   id: 5,
			//   link: "https://behance.com/",
			//   title: "Behance",
			//   target: "_blank",
			//   username: "jagmohan",
			//   icon: "behance",
			// },
		];

		return {
			menu,
			pages,
			features,
			images,
			companies,
			feedback,
			plans,
			websites,
		};
	}
}
