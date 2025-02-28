import { PatientsListComponent } from '@advantage-lite/patients-list';
import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      { path: 'home', component: PatientsListComponent }, // ie. /cashier/home
      { path: 'patients', component: PatientsListComponent }, // ie. /cashier/patients
    ],
  },
];
