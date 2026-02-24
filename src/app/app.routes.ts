import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { ContatoPage } from './pages/contato/contato.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'contato',
    component: ContatoPage,
  },
];
