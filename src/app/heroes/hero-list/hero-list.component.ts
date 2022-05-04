import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent {

  heroes: string[] = ['Spiderman', 'IronMan', 'Goku', 'Naruto'];
  deletedHeroes: string[] = [];

  deleteHero(): void {
    if(this.heroes.length>0){
      this.deletedHeroes.push(this.heroes.pop()!);
      console.log(this.deletedHeroes);
    }
  }
}
