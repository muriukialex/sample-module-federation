import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./remote-entry/entry.module').then((m) => m.RemoteEntryModule),
  // },
  {
    path: '',
    loadChildren: () => import('./app.module').then((m) => m.AppModule),
  },
];
