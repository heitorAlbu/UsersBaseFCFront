import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  readonly usersBaseFCUrl = "https://localhost:7258/api";

  constructor(private http:HttpClient) { }

  getUsers():Observable<any[]>{
    return this.http.get<any>(this.usersBaseFCUrl + '/User');
  }

  addUser(data:any){
    return this.http.post(this.usersBaseFCUrl + '/User', data);
  }
  updateUser(data:any){
    return this.http.put(this.usersBaseFCUrl + '/User', data);
  }

  deleteUser(data:any){
    return this.http.post(this.usersBaseFCUrl + '/User/Remove', data);
  }
  getUserById(id: string ){
    return this.http.get<any>(this.usersBaseFCUrl + '/User/GetById?id='+id)

  }
}
