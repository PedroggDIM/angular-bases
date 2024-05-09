import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './name-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService ){}

  get characters(): Character[] {  // get de characters que devuelve un arreglo de tipo character[]
    //Aquí se está utilizando el operador spread (...) para crear una copia del
    // array characters que está almacenado en el servicio DbzService.
    // Esto se hace para evitar la modificación directa del array original. Devuelve esta copia del array.
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ) : void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( Character: Character ): void {
    this.dbzService.addCharacter( Character );

  }
}
