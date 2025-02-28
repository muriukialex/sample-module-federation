import { ConsultationHomeComponent } from '@advantage-lite/consultation-home';
import { ConsultationQueuesComponent } from '@advantage-lite/consultation-queues';
import { ConsultationVisitsComponent } from '@advantage-lite/consultation-visits';
import { PatientsListComponent } from '@advantage-lite/patients-list';
import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      { path: 'home', component: ConsultationHomeComponent }, // ie. /consultation/home
      { path: 'patients', component: PatientsListComponent }, // ie. /consultation/patients
      { path: 'visits', component: ConsultationVisitsComponent }, // ie. /cashier/visits
      { path: 'queues', component: ConsultationQueuesComponent }, // ie. /cashier/queues
    ],
  },
];
