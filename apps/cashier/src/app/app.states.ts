import { CashiersHomeComponent } from '@advantage-lite/cashiers-home';
import { CashiersQueuesComponent } from '@advantage-lite/cashiers-queues';
import { CashiersVisitsComponent } from '@advantage-lite/cashiers-visits';
import { PatientsListComponent } from '@advantage-lite/patients-list';
import { Ng2StateDeclaration } from '@uirouter/angular';
import { RemoteEntryComponent } from './remote-entry/entry.component';

export const cashierState = {
  name: 'app.cashier',
  redirectTo: 'app.cashier.home',
  component: RemoteEntryComponent,
};

export const cashierHomeState: Ng2StateDeclaration = {
  name: 'app.cashier.home',
  url: '/cashier/home',
  component: CashiersHomeComponent,
};

export const cashierPatientsState = {
  name: 'app.cashier.patients',
  url: '/cashier/patients',
  component: PatientsListComponent,
};

export const cashierVisitsState = {
  name: 'app.cashier.visits',
  url: '/cashier/visits',
  component: CashiersVisitsComponent,
};

export const cashierQueuesState = {
  name: 'app.cashier.queues',
  url: '/cashier/queues',
  component: CashiersQueuesComponent,
};

export const CASHIER_STATES = [
  cashierState,
  cashierHomeState,
  cashierPatientsState,
  cashierVisitsState,
  cashierQueuesState,
];
