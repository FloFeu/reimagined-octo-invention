import { Component, OnInit } from '@angular/core';
import { USER } from 'src/mock/mock-user';
import { User } from 'src/models/user';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  user: User = USER; 
  totalPrice = 266.36;
  coupon = 10;

  totalCalculatedAfterDiscount = 239.724;
  constructor() { }

  ngOnInit(): void {
  }

}
