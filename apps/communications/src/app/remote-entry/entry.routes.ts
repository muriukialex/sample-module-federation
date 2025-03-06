import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { PatientsListComponent } from '@advantage-lite/patients-list';
import { CommunicationsHomeComponent } from '@advantage-lite/communications-home';
import { SegmentsListComponent } from '@advantage-lite/segments-list';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent },
  { path: 'home', component: CommunicationsHomeComponent }, // ie. /communications/home
  { path: 'patients', component: PatientsListComponent }, // ie. /communications/patients
  { path: 'segments', component: SegmentsListComponent }, // ie. /communications/segments

];
