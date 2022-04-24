import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/hero/hero.service';
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input() public hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  private getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
    console.log(this.hero);
  }

  public goBack(): void {
    this.location.back();
  }
}
