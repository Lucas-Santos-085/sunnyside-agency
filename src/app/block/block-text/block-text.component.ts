import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-text',
  templateUrl: './block-text.component.html',
  styleUrls: ['./block-text.component.scss'],
})
export class BlockTextComponent implements OnInit {
  @Input()
  blockTitle = '';

  @Input()
  blockText = '';

  constructor() {}

  ngOnInit(): void {}
}
