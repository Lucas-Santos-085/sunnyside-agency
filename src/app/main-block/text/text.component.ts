import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
  @Input()
  blockTitle = '';

  @Input()
  blockText = '';
  constructor() {}

  ngOnInit(): void {}
}
