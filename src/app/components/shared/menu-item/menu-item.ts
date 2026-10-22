import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-menu-item',
  styleUrl: './menu-item.css',
  templateUrl: './menu-item.html',
})
export class MenuItem {
  readonly label = input.required<string>();
  readonly route = input.required<string>();
}
