import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../../Shared/post.service';

@Component({
  selector: 'app-postmethod',
  templateUrl: './postmethod.component.html',
  styleUrls: ['./postmethod.component.css']
})
export class PostmethodComponent implements OnInit {
  email="vireshachara18@gmail.com";
  firstname : any;
  isUserCreated : boolean = false;

  constructor( private postservice : PostService) { }

  ngOnInit(): void {
  }

  addCustomer(formValue : NgForm ){
    console.log(formValue.value)
    const postBody = {
      title: formValue.value.title,
      body: formValue.value.descreption
    };

    this.postservice.addUser(postBody).subscribe(data =>{
      console.log(data)
      this.isUserCreated = true;
      }, (err)=> {
        console.log("Unable to add user" + err)
      })
    }
}
