import { PatientsListComponent } from '@advantage-lite/patients-list';
import { SegmentsListComponent } from '@advantage-lite/segments-list';
import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent },
  // { path: 'home', component: CommunicationsHomeComponent }, // ie. /communications/home
  { path: 'patients', component: PatientsListComponent }, // ie. /communications/patients
  { path: 'segments', component: SegmentsListComponent }, // ie. /communications/segments
];
