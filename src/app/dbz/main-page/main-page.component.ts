import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent {

  new: Character = {
    name: 'Goku',
    powerLevel: 0
  }
  
  constructor( private dbzService: DbzService ) {
  }
}
