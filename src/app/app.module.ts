import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderImageComponent } from './header-image/header-image.component';
import { BlockComponent } from './block/block.component';
import { BlockTextComponent } from './block/block-text/block-text.component';
import { BlockImageComponent } from './block/block-image/block-image.component';
import { MainBlockComponent } from './main-block/main-block.component';
import { MainBlockModule } from './main-block/main-block.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderImageComponent,
    BlockComponent,
  ],
  imports: [BrowserModule, MainBlockModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
