import { CommunicationsHomeComponent } from '@advantage-lite/communications-home';
import { PatientsListComponent } from '@advantage-lite/patients-list';
import { SegmentsListComponent } from '@advantage-lite/segments-list';
import { Ng2StateDeclaration } from '@uirouter/angular';
import { RemoteEntryComponent } from './remote-entry/entry.component';

export const communicationsState = {
  name: 'app.communications',
  redirectTo: 'app.communications.home',
  component: RemoteEntryComponent,
};
export const communicationsHomeState: Ng2StateDeclaration = {
  name: 'app.communications.home',
  url: '/communications/home',
  component: CommunicationsHomeComponent,
};

export const communicationsPatientsState: Ng2StateDeclaration = {
  name: 'app.communications.patients',
  url: '/communications/patients',
  component: PatientsListComponent,
};

export const communicationsSegmentsState: Ng2StateDeclaration = {
  name: 'app.communications.segments',
  url: '/communications/segments',
  component: SegmentsListComponent,
};

export const COMMUNICATIONS_STATES = [
  communicationsState,
  communicationsHomeState,
  communicationsPatientsState,
  communicationsSegmentsState,
];
