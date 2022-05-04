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
    name: '',
    powerLevel: 0
  }

  add(): void {
    if(this.new.name.trim().length > 0 && this.new.powerLevel >= 0) {
      
    }
    this.characters.push(this.new);
    this.new = {
      name : '',
      powerLevel : 0
    }
  }

}
