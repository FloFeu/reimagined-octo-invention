import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  totalPrice = 266.36;
  coupon = 10;
  user = {
    isVip: false
  };
  totalCalculatedAfterDiscount = 239.724;
  constructor() { }

  ngOnInit(): void {
  }

}
