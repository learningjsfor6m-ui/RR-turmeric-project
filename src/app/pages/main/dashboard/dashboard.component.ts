import { Component, ElementRef, ViewChild, afterNextRender } from '@angular/core';
import { GodownServiceService } from '../../../core/godown-service.service';
import { GodownDetails } from '../../../shared/interfaces/godown-details/godown.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../../shared/pipes/filter.pipe';
import { FilterHeaderComponent } from "../../shared/filter-header/filter-header.component";
import { DynamicFormComponent } from "../../shared/dynamic-form/dynamic-form.component";

// import { OnpushDemoComponent } from "../demo/onpush-demo/onpush-demo.component";

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
  isLayout:string ='card'
  @ViewChild('username') inputRef!: ElementRef<HTMLInputElement>

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

// New Lifcycle hooks in 17,18
// afterRender(() => {
//   console.log('DOM is ready!')
// })
// afterNextRender(() => {
//   console.log('View is updated after state change')
// });
gotoGodownPage(godown:GodownDetails){
console.log(godown)
let godownId:number = godown.id
this.router.navigate(['/layout/stock-report', godownId]);
}

getText($event:string){
  this.searchText = $event

}
getLayoutFlag(event:any){
console.log(event)
this.isLayout = event=='card' ? 'table':'card'
// if(event){
// this.isLayout = 'card'
// }else{
// this.isLayout = 'table'
// }
}
}
