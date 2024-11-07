import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class DbzListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onCharacterDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    //Emitir id del personaje
    console.log(id);
    this.onCharacterDelete.emit(id);
  }
}
