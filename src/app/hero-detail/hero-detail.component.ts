import { Component, Input } from '@angular/core';
import { UpperCasePipe, NgIf } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { Hero } from '../hero';


@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule,
    NgIf,
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
