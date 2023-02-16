import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'project';

  date = Date.now()
  a = [1, 2, 3, 4, 5];
  square_a : any = []

  constructor() {}

  ngOnInit(): void {

    // Normal method for Square the Numbers by Looping method
    
    // for (var i=0; i<this.a.length ; i++){
    //   let squareNumber: any;
    //   squareNumber = this.a[i] * this.a[i]
    //   this.square_a.push(squareNumber)
    // }
    // console.log ("Normal method for Square the Numbers by Looping method")
    // console.log(this.square_a)
  }
}
