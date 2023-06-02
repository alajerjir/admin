import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'Add Professor ',  icon:'person', class: '' },
  { path: '/table-list', title: '  Professor',  icon:'content_paste', class: '' },
  { path: '/add', title: 'Add Courses',  icon:'add', class: ''},
  { path: '/typography', title: 'Courses',  icon:'library_books', class: ''},
  { path: '/certif', title: 'Add Cerificates',  icon:'add', class: ''},
  { path: '/certiflist', title: 'Certificates',  icon:'list', class: ''},

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
