import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { SidebarService } from '../../../core/sidebar.service';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'sidebar',
  imports: [CommonModule, RouterLink,RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menu = [
    { name: 'Home', icon: 'bi-house-door' },
    { name: 'Analytics', icon: 'bi-graph-up' },
    { name: 'Users', icon: 'bi-people' },
    { name: 'Messages', icon: 'bi-chat' },
    { name: 'Settings', icon: 'bi-gear' }
  ];
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
