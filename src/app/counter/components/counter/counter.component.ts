import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter {{ counter }}</h3>

  <button type="button" (click)="increaseBy(+1)">+1</button>
  <button type="button" (click)="resetCounter()">Reset</button>
  <button type="button" (click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent  {
  constructor() { }
  public counter: number = 10;

  public increaseBy ( value: number ):void {
   // this.counter = this.counter + 1;
      this.counter += value;
  }
  public resetCounter () {
    this.counter = 10;
  }

}
