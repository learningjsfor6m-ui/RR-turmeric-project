import { Component } from '@angular/core';
import { FilterHeaderComponent } from "../../shared/filter-header/filter-header.component";

@Component({
  selector: 'user-list',
  imports: [FilterHeaderComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
headingOfPage:string= 'User Management'
selectedItem:string=''


getText(type:string){

}
}
