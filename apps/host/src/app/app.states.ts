import { LoginComponent } from '@advantage-lite/login';
import { SelectAppComponent } from '@advantage-lite/select-app';
import { AppComponent } from './app.component';

export const appState = {
  name: 'app',
  redirectTo: 'app.login',
  component: AppComponent,
};

export const loginState = {
  name: 'app.login',
  url: '/login',
  component: LoginComponent,
};

export const selectAppState = {
  name: 'app.selectApps',
  url: '/select-apps',
  component: SelectAppComponent,
};

export const consultationFutureState = {
  name: 'app.consultation.**',
  url: '/consultation',
  loadChildren: () =>
    import('consultation/Module').then((m) => m.RemoteEntryModule),
};

export const cashierFutureState = {
  name: 'app.cashier.**',
  url: '/cashier',
  loadChildren: () => import('cashier/Module').then((m) => m.RemoteEntryModule),
};

export const APP_STATES = [
  appState,
  loginState,
  selectAppState,
  consultationFutureState,
  cashierFutureState,
];
