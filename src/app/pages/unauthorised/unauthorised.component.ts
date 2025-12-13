import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'unauthorised',
  imports: [RouterLink],
  templateUrl: './unauthorised.component.html',
  styleUrl: './unauthorised.component.scss',
})
export class UnauthorisedComponent implements OnInit{
 message = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const reason = this.route.snapshot.queryParamMap.get('reason');

    if (reason === 'no_access') {
      this.message = 'You are not authorized to access this page.';
    } else {
      this.message = 'Access restricted.';
    }
  }
}
