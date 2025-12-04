import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GodownServiceService } from '../../../core/godown-service.service';
import { GodownDetails } from '../../../shared/godown-details/godown.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'stockandreport',
  imports: [CommonModule],
  templateUrl: './stockandreport.component.html',
  styleUrl: './stockandreport.component.scss'
})
export class StockandreportComponent {
  stockandreportId:number
  godownDetails:GodownDetails[]=[]
  isLoading:boolean =false
 constructor(private route: ActivatedRoute,private godownService:GodownServiceService,private router:Router){
    this.stockandreportId = this.route.snapshot.params['id']
    this.route.params.subscribe((params:Params)=>{
      this.stockandreportId = params['id']
      this.godownService.$godownId.next(this.stockandreportId)
    })

  }

  ngOnInit(){
    this.isLoading=true
   this.godownService.getGodowndetails().subscribe((res:GodownDetails[])=>this.godownDetails = res.filter(res=>res.id===Number(this.stockandreportId)))
  this.isLoading=false
  }

  gotoInvardOutward(){
    this.router.navigateByUrl('/invard-outward')
  }
}
