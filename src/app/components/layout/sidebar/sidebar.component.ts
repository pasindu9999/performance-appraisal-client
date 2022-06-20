import { Component, OnInit } from '@angular/core';

declare interface RouteInfo{
  path:string;
  title:string;
  class:string;
}
export const ROUTES: RouteInfo[]=[
  {path: 'dashboard', title:'Dashboard',class:''},
  {path: 'admin-pa', title:'PA sheet',class:''},
  {path: 'departments-list', title:'Department',class:''},
  {path: 'team-list', title:'Team',class:''},
  {path: 'employee-list', title:'Employee',class:''},
  {path: 'user-profile', title:'Profile',class:''},


];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems : any;
  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
