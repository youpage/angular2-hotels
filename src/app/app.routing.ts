import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }     from './home/home.component';
import { HotelsComponent }   from './hotels/hotels.component';

const app_routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/home' },
  { path: 'home',  component: HomeComponent },
  { path: 'hotels', component: HotelsComponent }
];

export const app_routing = RouterModule.forRoot(app_routes);