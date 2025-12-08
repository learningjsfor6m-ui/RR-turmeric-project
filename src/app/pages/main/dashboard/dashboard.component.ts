import { Component } from '@angular/core';
import { GodownServiceService } from '../../../core/godown-service.service';
import { GodownDetails } from '../../../shared/godown-details/godown.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../../shared/pipes/filter.pipe';
import { FilterHeaderComponent } from "../../shared/filter-header/filter-header.component";

@Component({
  selector: 'dashboard',
  imports: [CommonModule, FormsModule, FilterPipe, FilterHeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  godownDetails:GodownDetails[]=[]
  isLoading:boolean = false
  headingOfPage:string = 'Turmeric Godown Dashboard'
  searchText:string = ''
  selectedItem:string = ''
constructor(private godownService:GodownServiceService,private router:Router){

}

ngOnInit(){
  this.isLoading =true
  setTimeout(()=>{
    this.godownService.getGodowndetails().subscribe((res:GodownDetails[])=>{
    this.godownDetails= res
    console.log(res)
     this.isLoading =false
  },error=>{

     this.isLoading =false
  })
  },1000)
}

gotoGodownPage(godown:GodownDetails){
console.log(godown)
let godownId:number = godown.id
this.router.navigate(['/stock-report', godownId]);
}

getText($event:string){
  this.searchText = $event
debugger
}
}
