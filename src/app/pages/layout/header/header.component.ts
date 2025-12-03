import { Component, EventEmitter, Output } from '@angular/core';
import { SidebarService } from '../../../core/sidebar.service';

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
 constructor(private sidebarService: SidebarService) {}

toggleSidebar() {
  this.sidebarService.toggle();
}
}
