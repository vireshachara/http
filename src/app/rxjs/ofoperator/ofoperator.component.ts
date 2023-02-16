import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-ofoperator',
  templateUrl: './ofoperator.component.html',
  styleUrls: ['./ofoperator.component.css']
})
export class OfoperatorComponent implements OnInit {

  // ------------------Array--------------------------
  studentList = ["Ram", "Sita", "Hanuman", "Laxman"]
  students : Observable<string[]> = of(this.studentList)

  // ------------------Strings--------------------------
  name : Observable<string> = of("Veeresh")

  // ------------------Object--------------------------
  studentObj = { id:10, name:"Rama"};
  student$ : Observable<any> = of(this.studentObj);

  constructor() { }

  ngOnInit(): void {

  // ------------------Array--------------------------
    this.students.subscribe((data: any) => {
      console.log(data)
      this.students = data
    })
  // ------------------Strings--------------------------
    this.name.subscribe((data: any) => {
      console.log(data)
      this.name = data
    })
  // ------------------Object--------------------------
    this.student$.subscribe((data:any) =>{
      console.log(data)
      this.student$ = data 
    })

  }

}
 