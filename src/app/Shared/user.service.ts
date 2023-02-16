import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  name:string;
  email:string;
  phone: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  getUsers():Observable<User>{

    const headers = new HttpHeaders ({
      'content-type' : 'application/json',
      'authenticationToken' : '1234567'
    })

    const params = new HttpParams()
    .set('pageNum', '10')
    .set('pageSize','100')

    return this.http.get<User>("https://jsonplaceholder.typicode.com/users", {headers : headers, params:params})

  }
}
