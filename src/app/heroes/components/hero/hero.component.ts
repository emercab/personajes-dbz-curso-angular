import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }


  capitalizedName(): string {
    return this.name.toUpperCase();
  }


  changeName(name: string): void {
    this.name = name;
  }


  changeAge(age: number): void {
    this.age = age;
  }

}
