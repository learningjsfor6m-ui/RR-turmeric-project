import { Component } from '@angular/core';
import { GodownServiceService } from '../../../core/godown-service.service';
import { GodownDetails } from '../../../shared/godown-details/godown.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  godownDetails:GodownDetails[]=[]
  isLoading:boolean = false
constructor(private godownService:GodownServiceService,private router:Router){

}

ngOnInit(){
  this.isLoading =true
  this.godownService.getGodowndetails().subscribe((res:GodownDetails[])=>{
    this.godownDetails= res
    console.log(res)
     this.isLoading =false
  },error=>{

     this.isLoading =false
  })
}

gotoGodownPage(godown:GodownDetails){
console.log(godown)
let godownId:number = godown.id
this.router.navigate(['/stock-report', godownId]);
}
}
