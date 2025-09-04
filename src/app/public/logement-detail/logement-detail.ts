import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PropertiesService, PropertyDetail } from '../service';

@Component({
  selector: 'app-logement-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './logement-detail.html',
  styleUrls: ['./logement-detail.css']
})
export class LogementDetail implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly propertiesService = inject(PropertiesService);
  private readonly router = inject(Router);
  property?: PropertyDetail;
  isDescriptionOpen = false;
  isEquipmentsOpen = false;

  get id(): string | null {
    return this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    const id = this.id;
    if (!id) {
      this.router.navigate(['/not-found']);
      return;
    }
    this.propertiesService.getById(id).subscribe({
      next: (p) => (this.property = p),
      error: () => this.router.navigate(['/not-found'])
    });
  }
}


