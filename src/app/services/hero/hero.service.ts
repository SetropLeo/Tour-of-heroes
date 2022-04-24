import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../mock-heroes';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  public getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  public getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((hero) => hero.id === id)!;
    this.messageService.add('HeroService: fetched hero from id=${id}');
    return of(hero);
  }
}
