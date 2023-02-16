import { Component, OnInit } from '@angular/core';
import { PutService } from '../../Shared/put.service';

@Component({
  selector: 'app-putmethod',
  templateUrl: './putmethod.component.html',
  styleUrls: ['./putmethod.component.css']
})
export class PutmethodComponent implements OnInit {
  userService: any;

  constructor(private putService : PutService) { }

  ngOnInit(): void {
    this.putService.updateUser();
  }

}
 