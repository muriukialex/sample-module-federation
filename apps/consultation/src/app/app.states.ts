import { ConsultationHomeComponent } from '@advantage-lite/consultation-home';
import { ConsultationQueuesComponent } from '@advantage-lite/consultation-queues';
import { ConsultationVisitsComponent } from '@advantage-lite/consultation-visits';
import { PatientsListComponent } from '@advantage-lite/patients-list';
import { Ng2StateDeclaration } from '@uirouter/angular';
import { RemoteEntryComponent } from './remote-entry/entry.component';

export const consultationState = {
  name: 'app.consultation',
  redirectTo: 'app.consultation.home',
  url: 'consultation',
  component: RemoteEntryComponent,
};

export const consultationHomeState: Ng2StateDeclaration = {
  name: 'app.consultation.home',
  url: '/home',
  component: ConsultationHomeComponent,
};

export const consultationPatientsState: Ng2StateDeclaration = {
  name: 'app.consultation.patients',
  url: '/patients',
  component: PatientsListComponent,
};

export const consultationVisitsState: Ng2StateDeclaration = {
  name: 'app.consultation.visits',
  url: '/visits',
  component: ConsultationVisitsComponent,
};

export const consultationQueuesState: Ng2StateDeclaration = {
  name: 'app.consultation.queues',
  url: '/queues',
  component: ConsultationQueuesComponent,
};

export const CONSULTATION_STATES = [
  consultationState,
  consultationHomeState,
  consultationPatientsState,
  consultationVisitsState,
  consultationQueuesState,
];
