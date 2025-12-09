import { Component, EventEmitter, Output } from '@angular/core';
import { SidebarService } from '../../../core/sidebar.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // @Output() toggleSidebar = new EventEmitter<void>();

  // onToggleSidebar() {
  //   this.toggleSidebar.emit();
  // }
 constructor(private sidebarService: SidebarService,private auth:AuthService,private router:Router) {}

toggleSidebar() {
  this.sidebarService.toggle();
}
logout(){
  this.auth.logout();
  this.router.navigateByUrl('/login')
}
}
