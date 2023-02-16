import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-fromoperator',
  templateUrl: './fromoperator.component.html',
  styleUrls: ['./fromoperator.component.css'],
})
export class FromoperatorComponent implements OnInit {
  ordersArray = ['Fashion', 'Electronics', 'Mobile', 'HouseHold'];
  orders$: Observable<string> = from(this.ordersArray);
  orderName: any;

  constructor() {}

  ngOnInit(): void {

    this.orders$ = new Observable(function (observer) {
      try {
        observer.next('Fashion');
        observer.next('Electronics');
        observer.next('Mobile');
        observer.next('HouseHold');
        // setInterval(() => {
        //   observer.next ("Fashion");
        // },3000)
        // setInterval(() => {
        //   observer.next ("Electronics");
        // },6000)
        // setInterval(() => {
        //   observer.next ("Mobile");
        // },9000)
        // setInterval(() => {
        //   observer.next ("HouseHold");
        // },12000)

      } catch (e) {
        observer.error(e);
      }
    });

    this.orders$.subscribe((data) => {
      console.log(data);
      this.orderName = data;
    });
  }
}
