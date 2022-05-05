import { Component} from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  get characters() {
    return this.dbzService.characters;
  }

  constructor( private dbzService : DbzService ){

  }
}
