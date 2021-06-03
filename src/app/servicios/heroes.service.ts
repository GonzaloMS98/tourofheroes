import { Injectable } from '@angular/core';

export interface Heroe {
  name : string,
  id: string,
}

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes : Array<Heroe>  = [
    
      { id: '11', name: 'Paco' },
      { id: '12', name: 'Narco' },
      { id: '13', name: 'Bombasto' },
      { id: '14', name: 'Quico' },
      { id: '15', name: 'Magneta' },
      { id: '16', name: 'Chabelo' },
      { id: '17', name: 'Dynama' },
      { id: '18', name: 'El bananas' },
      { id: '19', name: 'La chupitos' },
      { id: '20', name: 'Cracatoa' }
    
  ];

  public getHeroes  = () : Array<Heroe> => {
    return this.heroes;
  }

  constructor() { }
}
