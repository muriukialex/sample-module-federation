import { AppMenuConfig } from './interfaces/menu-items.interface';

export const MENU_CONFIG: AppMenuConfig = {
  cashier: [
    { path: '/cashier', label: 'Home' },
    { path: '/cashier/patients', label: 'Patients' },
  ],
  consultation: [
    { path: '/consultation', label: 'Appointments' },
    { path: '/consultation/patients', label: 'Patients' },
  ],
};
