import { MenuItem } from '@advantage-lite/sil-interfaces';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from './lib/services/menu.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  menuItems: MenuItem[] = [];
  title = 'Advantage Lite';
  menuConfig: any;
  constructor(private menuService: MenuService, private router: Router) {}

  logOut() {
    this.router.navigate(['login']);
    this.menuItems = [];
  }

  ngOnInit() {
    this.menuConfig = this.menuService.getMenuConfig();

    this.menuItems = this.menuConfig.items;
    this.title = this.menuConfig.title.toUpperCase();
  }
}
