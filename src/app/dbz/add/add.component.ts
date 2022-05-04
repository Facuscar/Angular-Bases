import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  @Input() characters: Character[] = []; 
  @Input() new: Character = {
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
