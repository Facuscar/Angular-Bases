import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Counter';
  number: number = 10;
  base: number = 5;

  change( value : number ){
    this.number += value;
  }
}
