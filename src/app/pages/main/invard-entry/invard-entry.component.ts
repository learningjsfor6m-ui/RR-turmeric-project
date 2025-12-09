import { Component, OnInit } from '@angular/core';
import { GodownServiceService } from '../../../core/godown-service.service';
import { GodownDetails } from '../../../shared/godown-details/godown.interface';

@Component({
  selector: 'invard-entry',
  imports: [],
  templateUrl: './invard-entry.component.html',
  styleUrl: './invard-entry.component.scss',
})
export default class InvardEntryComponent implements OnInit {
  apiData: GodownDetails[] = [];
  constructor(private godownService: GodownServiceService) {}

  ngOnInit() {
    debugger
    this.godownService.$godownId.subscribe((resu) => {
      let number = Number(resu)
      if (resu) {
        this.godownService.getGodowndetails().subscribe(
          (res: GodownDetails[]) => {
            this.apiData = res.filter(result=>result.id === number);
            console.log('API result:', this.apiData);
          },
          (err) => {
            console.error('API error:', err);
          }
        );
      }
    });
  }
}
