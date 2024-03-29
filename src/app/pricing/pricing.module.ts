import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingBlockComponent } from './pricing-block/pricing-block.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [PricingBlockComponent, PricingPageComponent],
	imports: [CommonModule, PricingRoutingModule,FormsModule],
})
export class PricingModule {}
