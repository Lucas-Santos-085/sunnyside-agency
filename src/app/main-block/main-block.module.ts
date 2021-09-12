import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBlockComponent } from './main-block.component';
import { TextComponent } from './text/text.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [MainBlockComponent, TextComponent, ImageComponent],
  imports: [CommonModule],
  exports: [MainBlockComponent],
})
export class MainBlockModule {}
