import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PutService {

  constructor(private http:HttpClient) { }

  updateUser(){
    const putBody = {
      name   : 'Veeresh Tutorials',
      userId : 1
    };

   return this.http.put("https://jsonplaceholder.typicode.com/user/1", putBody)
  }
}
