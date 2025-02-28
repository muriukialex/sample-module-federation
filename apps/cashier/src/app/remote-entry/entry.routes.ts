import { CashiersHomeComponent } from '@advantage-lite/cashiers-home';
import { CashiersQueuesComponent } from '@advantage-lite/cashiers-queues';
import { CashiersVisitsComponent } from '@advantage-lite/cashiers-visits';
import { PatientsListComponent } from '@advantage-lite/patients-list';
import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      { path: 'home', component: CashiersHomeComponent }, // ie. /cashier/home
      { path: 'patients', component: PatientsListComponent }, // ie. /cashier/patients
      { path: 'visits', component: CashiersVisitsComponent }, // ie. /cashier/visits
      { path: 'queues', component: CashiersQueuesComponent }, // ie. /cashier/queues
    ],
  },
];
