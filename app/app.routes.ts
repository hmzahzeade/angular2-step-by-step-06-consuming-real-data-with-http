import { provideRouter, RouterConfig } from '@angular/router';
import { PeopleListComponent } from './people-list.component';
import { PersonDetailsComponent } from './person-details.component';

// Route config let's you map routes to components
const routes: RouterConfig = [
  // map '/persons' to the people list component
  {
    path: 'persons',
    component: PeopleListComponent,
  },
  // map '/persons/:id' to person details component
  {
    path: 'persons/:id', 
    component: PersonDetailsComponent 
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/persons',
    pathMatch: 'full'
  },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
