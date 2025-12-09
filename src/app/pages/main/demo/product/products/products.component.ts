import { Component, signal } from '@angular/core';
import { DeferLoadingwithJsonApiService } from '../../../../../core/demo/defer-loadingwith-json-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  data= signal<any[] | null>(null);;
  constructor(private jsonApi:DeferLoadingwithJsonApiService){}
  ngOnInit(){

   }
   loadData(){
        this.jsonApi.getVideos().subscribe(res=>{
     this.data.set(res)
    })
   }
}
