import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from 'src/app/services/hero/hero.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): void {
    this.heroService
      .getHeroes()
      .pipe()
      .subscribe((heroes) => {
        this.heroes = heroes;
      });
  }
}
