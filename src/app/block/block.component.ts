import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent implements OnInit {
  @Input()
  imageMobile = '';

  @Input()
  imageDesktop = '';

  @Input()
  blockTitle = '';

  @Input()
  blockText = '';

  constructor() {}

  ngOnInit(): void {}
}
