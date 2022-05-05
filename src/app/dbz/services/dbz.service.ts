import { Injectable } from "@angular/core";
import { Character } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    private _characters: Character[] = [
        {
            name: 'Naruto',
            powerLevel: 15000
        },{
            name: 'Sasuke',
            powerLevel: 12000
        }
    ]

    get characters(): Character[] {
        return [...this._characters];
    }

    constructor() {}

    addNewCharacter( character: Character ){
    this._characters.push( character );
    }
}