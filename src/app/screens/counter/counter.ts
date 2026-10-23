import { Component, signal } from '@angular/core';
import { Title } from '../../components/shared/title/title';

@Component({
  imports: [Title],
  selector: 'app-counter',
  styleUrl: './counter.css',
  templateUrl: './counter.html',
})
export class Counter {
  count = signal(0);

  increment() {
    this.count.update((n) => n + 1);
  }

  decrement() {
    if(this.count() > 0){
      this.count.update((n) => n -1);
    }
  }

  reset() {
    this.count.set(0);
  }
}
