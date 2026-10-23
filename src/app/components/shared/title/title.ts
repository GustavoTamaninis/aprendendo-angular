import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-title',
  styleUrl: './title.css',
  templateUrl: './title.html',
})
export class Title {
  readonly main = input.required<string>();
  readonly sub = input<string>();
}
