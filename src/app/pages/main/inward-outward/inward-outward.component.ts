import { Component, OnInit } from '@angular/core';
import { GodownServiceService } from '../../../core/godown-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'inward-outward',
  imports: [],
  templateUrl: './inward-outward.component.html',
  styleUrl: './inward-outward.component.scss',
})
export class InwardOutwardComponent {

  constructor(private router:Router){}
  navigateToInvardEntry(){
  this.router.navigateByUrl('/invard-entry')
  }
}
