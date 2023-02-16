import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


interface User {
  name:string;
  email:string;
  phonenumber: number;
}
@Injectable({
  providedIn: 'root'
})
export class PostService {
 
  constructor( private http : HttpClient) { }

  addUser(body: any ):Observable<User>{
    
    const customHeaders = new HttpHeaders({
      'authenticationKey' : 'testing123'
    }); 
    const customParams = new HttpParams()
      .set('userRole', 'admin');  


    return this.http.post<User>("https://jsonplaceholder.typicode.com/users", body, {headers : customHeaders, params : customParams })
  }
}
