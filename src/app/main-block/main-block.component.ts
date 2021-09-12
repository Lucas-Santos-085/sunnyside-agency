import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: ['./main-block.component.scss'],
})
export class MainBlockComponent implements OnInit {
  @Input()
  imageMobileFinal = '';

  @Input()
  imageDesktopFinal = '';

  @Input()
  blockTitleFinal = '';

  @Input()
  blockTextFinal = '';

  constructor() {}

  ngOnInit(): void {}
}
