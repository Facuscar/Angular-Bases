import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h1>{{ title }}</h1>

    <h3>The base is : <strong>{{ base }}</strong></h3>
    
    <button (click)="change(base)"> + {{ base }} </button>
    
    <span>{{ number }}</span>
    
    <button (click)="change(-base)"> - {{ base }} </button>
    `
})

export class CounterComponent {
    title: string = 'Counter';
    number: number = 10;
    base: number = 5;
  
    change( value : number ){
      this.number += value;
    }
}