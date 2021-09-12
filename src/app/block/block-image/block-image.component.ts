import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-image',
  templateUrl: './block-image.component.html',
  styleUrls: ['./block-image.component.scss'],
})
export class BlockImageComponent implements OnInit {
  @Input()
  imageMobile = '';

  @Input()
  imageDesktop = '';

  constructor() {}

  ngOnInit(): void {}
}
