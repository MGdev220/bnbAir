import { Routes } from '@angular/router';
import { Acceuil } from './public/acceuil/acceuil';
import { Apropos } from './public/apropos/apropos';
import { NotFound } from './public/not-found/not-found';
import { LogementDetail } from './public/logement-detail/logement-detail';

export const routes: Routes = [
  { path: '', component: Acceuil },
  { path: 'apropos', component: Apropos },
  { path: 'logement/:id', component: LogementDetail }, 
  { path: 'not-found', component: NotFound },
  { path: '**', component: NotFound }
];
