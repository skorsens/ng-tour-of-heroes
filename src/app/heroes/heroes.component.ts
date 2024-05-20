import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    NgIf,
    HeroDetailComponent,
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  selectedHero?: Hero;

  heroes: Hero[] = HEROES;

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }
}
