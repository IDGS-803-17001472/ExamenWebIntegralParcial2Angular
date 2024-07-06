import { Routes } from '@angular/router';
import { HomepageComponent } from './tenis/homepage/homepage.component';
import { CatalogoComponent } from './tenis/catalogo/catalogo.component';
import { InfoComponent } from './tenis/info/info.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'productos', component: CatalogoComponent },
  {path: 'contacto', component: InfoComponent},
  {path:'inicio', component: HomepageComponent}
];
