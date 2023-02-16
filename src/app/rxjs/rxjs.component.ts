import { Component, OnInit } from '@angular/core';
import { filter, map, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit {

  nums : any;
  listofvalues: any;

  showMsg : any = []

  constructor() {}

  ngOnInit(): void {
    // ----------------------Using of and map operators--------------
    console.log("Using of and map operators")
    const nums = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
    // Looping array //
    // nums.subscribe(data => {
    //   console.log(data)
    // })
    const squareNums = map((val: number) => val * val);
    // const squareNums = map((val:number) => val * 2 )
    const s_numbers = squareNums(nums);

    s_numbers.subscribe((data) => {
      console.log(data);
      this.showMsg.push(data)
    });

    // ----------------------Using of & filter operators--------------
    console.log("Using of & filter operators")
    const k = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
    console.log('Filtering odd numbers');
    const example = k.pipe(filter((num) => num % 2 === 1));
    const subscribe = example.subscribe(val => console.log(val))


    //  -------------------- Array of Objects-----------------------------
    console.log("Using Array of Objects")
    let num = [
      { a: 15611, b: 25, c: 35 },
      { a: 45469, b: 65, c: 45 },
      { a: 55654, b: 66, c: 65 },
    ];

    num.forEach((element) => {
      console.log(element.a, element.b, element.c);

    });
  }
}
