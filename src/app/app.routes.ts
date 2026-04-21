import { Routes } from '@angular/router';
import { Userform } from './userform/userform';


export const routes: Routes = [
  { path: '', redirectTo: 'userform', pathMatch: 'full' },
  { path: 'userform', component: Userform },
];


