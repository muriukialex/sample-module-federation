export interface MenuItem {
  path: string;
  label: string;
}

export interface AppMenuConfig {
  [appName: string]: MenuItem[];
}
