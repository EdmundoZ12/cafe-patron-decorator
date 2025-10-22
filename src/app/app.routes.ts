import { Routes } from '@angular/router';
import { Cafeteria } from './cafeteria/cafeteria';

export const routes: Routes = [
  { path: '', component: Cafeteria },
  { path: '**', redirectTo: '' },
];
