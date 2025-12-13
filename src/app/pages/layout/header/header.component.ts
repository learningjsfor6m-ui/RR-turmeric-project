import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SidebarService } from '../../../core/sidebar.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../shared/user';

@Component({
  selector: 'header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  // @Output() toggleSidebar = new EventEmitter<void>();

  // onToggleSidebar() {
  //   this.toggleSidebar.emit();
  // }
  role:string = ''
 constructor(private sidebarService: SidebarService,private auth:AuthService,private router:Router) {}
ngOnInit(){
this.auth.currentUser$.subscribe((user: User | null) => {
  if (user) {
    this.role = user.role ? user.role : '';
  } else {
    this.role = '';
  }
});

console.log( this.role)
}
toggleSidebar() {
  this.sidebarService.toggle();
}
logout(){
  this.auth.logout();
  this.router.navigateByUrl('/login')
}

}
