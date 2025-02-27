import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'consultation',
    loadChildren: () =>
      import('consultation/Module').then((m) => m!.RemoteEntryModule),
  },
  {
    path: 'cashier',
    loadChildren: () =>
      import('cashier/Module').then((m) => m!.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
