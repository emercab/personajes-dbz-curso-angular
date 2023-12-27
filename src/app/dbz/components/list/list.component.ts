import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() // Recibe del padre
  public characterList!: Character[];

  @Output() // Emite al padre
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter()

  deleteCharacter(id?: string): void {
    this.onDeleteCharacter.emit(id)
  }
}
