import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PropertiesService, PropertySummary } from '../service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './acceuil.html',
  styleUrls: ['./acceuil.css']
})
export class Acceuil implements OnInit, OnDestroy {
  private readonly propertiesService = inject(PropertiesService);
  properties: PropertySummary[] = [
    { id: 1, title: 'Titre de la\nlocation' },
    { id: 2, title: 'Titre de la\nlocation' },
    { id: 3, title: 'Titre de la\nlocation' },
    { id: 4, title: 'Titre de la\nlocation' },
    { id: 5, title: 'Titre de la\nlocation' },
    { id: 6, title: 'Titre de la\nlocation' }
  ];
  loading = true;
  error?: string;

  // Images pour le carrousel du héros
  heroImages: string[] = [
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop'
  ];
  heroIndex = 0;
  private heroTimer?: any;

  ngOnInit(): void {
    this.propertiesService
      .list()
      .pipe(
        catchError((err) => {
          this.error = 'Impossible de charger les logements.';
          return of([] as PropertySummary[]);
        })
      )
      .subscribe((items) => {
        if (items && items.length) {
          this.properties = items.slice(0, 6);
        }
        this.loading = false;
      });
  }

  get currentHero(): string {
    return this.heroImages[this.heroIndex % this.heroImages.length];
  }

  nextHero(): void {
    this.heroIndex = (this.heroIndex + 1) % this.heroImages.length;
  }

  prevHero(): void {
    this.heroIndex = (this.heroIndex - 1 + this.heroImages.length) % this.heroImages.length;
  }

  startAuto(): void {
    if (this.heroTimer) return;
    this.heroTimer = setInterval(() => this.nextHero(), 2500);
  }

  stopAuto(): void {
    if (this.heroTimer) {
      clearInterval(this.heroTimer);
      this.heroTimer = undefined;
    }
  }

  ngOnDestroy(): void {
    this.stopAuto();
  }
}
