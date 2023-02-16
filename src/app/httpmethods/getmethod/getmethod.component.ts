import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Shared/user.service';

@Component({
  selector: 'app-getmethod',
  templateUrl: './getmethod.component.html',
  styleUrls: ['./getmethod.component.css']
})
export class GetmethodComponent implements OnInit {
  users: any;
 
  constructor( private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getUsers().subscribe((data)=> {
      this.users = data;
    },
    (error) => {
     console.log('Unable to get the Data from URL'+ error)
    })
  }
}


// this.userservice.getUsers().subscribe( data => {
//   this.users = data;
// }, 
// (err) => {
//   console.log ("Unable to get the Data from URL" + err);
// }
// )