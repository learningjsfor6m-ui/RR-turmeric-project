import { Component } from '@angular/core';
import { FilterHeaderComponent } from '../../shared/filter-header/filter-header.component';

@Component({
  selector: 'analytics',
  imports: [FilterHeaderComponent],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {
headingOfPage:string= 'Welcome to Your Analytics'
selectedItem:string=''


getText(type:string){

}
}
