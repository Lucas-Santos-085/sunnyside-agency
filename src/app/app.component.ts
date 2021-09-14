import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sunnyside-agency-landing-page';

  // Path to images
  imageEggMobile = '../../assets/images/mobile/image-transform.jpg';
  imageEggDesktop = '../../assets/images/desktop/image-transform.jpg';

  imageCupMobile = '../../assets/images/mobile/image-stand-out.jpg';
  imageCupDesktop = '../../assets/images/desktop/image-stand-out.jpg';
}
