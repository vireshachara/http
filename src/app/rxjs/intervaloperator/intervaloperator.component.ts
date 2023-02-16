import { Component, OnInit } from '@angular/core';
import { from, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-intervaloperator',
  templateUrl: './intervaloperator.component.html',
  styleUrls: ['./intervaloperator.component.css'],
})
export class IntervaloperatorComponent implements OnInit {
  ordersArray = ['Fashion', 'Electronics', 'Mobile', 'HouseHold'];
  orders$: Observable<string> = from(this.ordersArray);

  constructor() {}

  ngOnInit(): void {
    this.orders$.subscribe((data) => {
      const seqNum$ = interval(1000);

      seqNum$.subscribe((num) => {
        if (num < 5) {
          console.log(data + num);
        }
      });
    });
  }
}
