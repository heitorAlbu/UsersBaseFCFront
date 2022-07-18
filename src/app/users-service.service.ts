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

  deleteUser(data:any){
    return this.http.delete(this.usersBaseFCUrl + '/User/Remove/'+ data.id);
  }
}
