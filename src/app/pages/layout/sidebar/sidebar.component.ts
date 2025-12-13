import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { SidebarService } from '../../../core/sidebar.service';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Menu } from '../../../shared/interfaces/menu/menu.interface';

@Component({
  selector: 'sidebar',
  imports: [CommonModule, RouterLink,RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menu:Menu[] = [
  {
    label: 'Dashboard',
    icon: 'bi bi-speedometer2',
    route: '/layout',
    exact: true
  },
  {
    label: 'Analytics',
    icon: 'bi bi-bar-chart',
    route: '/layout/analytics',
    exact: true
  },
  {
    label: 'Users',
    icon: 'bi bi-people',
    route: '/layout/user-lists',
    exact: true
  },
  {
    label: 'Messages',
    icon: 'bi bi-envelope',
    route: '/layout/messages',
    exact: true
  },
  {
    label: 'Settings',
    icon: 'bi bi-gear',
    route: '/layout/settings',
    exact: true
  },
  {
    label: 'Products',
    icon: 'bi bi-people',
    route: '/layout/products',
    exact: true
  }
];
;
  // @Input() isOpen: boolean = true;

  isOpen = true;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.sidebarOpen$.subscribe(state=>{
      this.isOpen=state;
    })
  }
  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  // Auto close on small screens
  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    if(event.target.innerWidth < 768){
      this.isOpen = false;
    } else {
      this.isOpen = true;
    }
  }
}
