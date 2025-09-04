import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apropos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apropos.html',
  styleUrls: ['./apropos.css']
})

export class Apropos {
  items = [
    { title: 'Respect', content: "Nous valorisons le respect des lieux et des personnes." },
    { title: 'Fiabilité', content: "Des logements conformes à la description et un service réactif." },
    { title: 'Sécurité', content: "La sécurité des hôtes et voyageurs est prioritaire." },
    { title: 'Ambiance', content: "Des séjours chaleureux et conviviaux, partout et ailleurs." }
  ];

  openIndex: number | null = null;

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
