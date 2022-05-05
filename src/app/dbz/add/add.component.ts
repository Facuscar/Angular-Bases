import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  @Input() new: Character = {
    name: '',
    powerLevel: 0
  }

  constructor ( private dbzService: DbzService ) {}

  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  add(): void {
    if(this.new.name.trim().length > 0 && this.new.powerLevel >= 0) {

      // this.onNewCharacter.emit( this.new );
      this.dbzService.addNewCharacter( this.new )

      this.new = {
        name : '',
        powerLevel : 0
      }
    } else {
      console.log('Valores inválidos');
    }
  }
}
