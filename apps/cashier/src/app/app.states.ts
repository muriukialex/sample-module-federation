import { CashiersHomeComponent } from '@advantage-lite/cashiers-home';
import { CashiersQueuesComponent } from '@advantage-lite/cashiers-queues';
import { CashiersVisitsComponent } from '@advantage-lite/cashiers-visits';
import { PatientsListComponent } from '@advantage-lite/patients-list';
import { Ng2StateDeclaration } from '@uirouter/angular';
import { RemoteEntryComponent } from './remote-entry/entry.component';

export const cashierState: Ng2StateDeclaration = {
  name: 'app.cashier',
redirectTo: 'app.cashier.home',
  url: '/cashier',
  component: RemoteEntryComponent,
};

export const cashierHomeState: Ng2StateDeclaration = {
  name: 'app.cashier.home',
  url: '/home',
  component: CashiersHomeComponent,
};

export const cashierPatientsState = {
  name: 'app.cashier.patients',
  url: '/patients',
  component: PatientsListComponent,
};

export const cashierVisitsState = {
  name: 'app.cashier.visits',
  url: '/visits',
  component: CashiersVisitsComponent,
};

export const cashierQueuesState = {
  name: 'app.cashier.queues',
  url: '/queues',
  component: CashiersQueuesComponent,
};

export const CASHIER_STATES = [
  cashierState,
  cashierHomeState,
  cashierPatientsState,
  cashierVisitsState,
  cashierQueuesState,
];
