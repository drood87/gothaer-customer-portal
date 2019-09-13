import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.component.html',
  styleUrls: ['./insurance-details.component.scss']
})
export class InsuranceDetailsComponent implements OnInit {
  /* grab the details from parent component*/
  @Input() insuranceDetails: {
    name: string;
    prices: {
      age: number;
      price: number;
      currency: string;
    };
  };

  constructor() {}

  ngOnInit() {}
}
