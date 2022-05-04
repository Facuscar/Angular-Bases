import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent {

  characters: Character [] = [];

  new: Character = {
    name: 'Goku',
    powerLevel: 0
  }

  addNewCharacter( character: Character ){
    this.characters.push(character);
  }

}
