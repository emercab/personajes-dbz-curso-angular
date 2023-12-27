import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {

  public title: string = 'Hola Mundo';
  public counter: number = 10;

  increment(value: number): void {
    this.counter += value;
  }


  reset(): void {
    this.counter = 10;
  }
}