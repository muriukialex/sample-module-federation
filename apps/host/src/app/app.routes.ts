import { LoginComponent } from '@advantage-lite/login';
import { NotFoundComponent } from '@advantage-lite/not-found';
import { SelectAppComponent } from '@advantage-lite/select-app';

import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'consultation',
    loadChildren: () =>
      import('consultation/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'cashier',
    loadChildren: () =>
      import('cashier/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'select-apps',
    component: SelectAppComponent,
  },
  {
    path: '**', // Wildcard route for 404 Not Found
    component: NotFoundComponent,
  },
];
