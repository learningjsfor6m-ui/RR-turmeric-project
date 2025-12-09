import { Component } from '@angular/core';
import { FilterHeaderComponent } from '../../shared/filter-header/filter-header.component';

@Component({
  selector: 'messages',
  imports: [FilterHeaderComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
headingOfPage:string= 'User Management'
selectedItem:string=''


getText(type:string){

}
}
