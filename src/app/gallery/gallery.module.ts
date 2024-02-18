import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { ImageBlockComponent } from './image-block/image-block.component';

@NgModule({
	declarations: [GalleryPageComponent, ImageBlockComponent],
	imports: [CommonModule, GalleryRoutingModule,FormsModule],
})
export class GalleryModule {}
