import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockImageComponent } from './block-image/block-image.component';
import { BlockTextComponent } from './block-text/block-text.component';
import { BlockComponent } from './block.component';

@NgModule({
  declarations: [BlockComponent, BlockTextComponent, BlockImageComponent],
  imports: [CommonModule],
})
export class BlockModule {}
