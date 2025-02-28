import { Injectable } from '@angular/core';
import { MENU_CONFIG } from '../../menu.config';

type menuItem = 'cashier' | 'consultation';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  currentPath: any;

  getMenuConfig() {
    const currentPath = window.location.pathname.split('/')[1] as menuItem; // Get the first segment (app name)
    return {
      items: MENU_CONFIG[currentPath] || [],
      title: currentPath,
    };
  }
}
