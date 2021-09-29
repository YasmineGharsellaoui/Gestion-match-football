import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = 'http://localhost:3000';
  constructor(private httpClient:HttpClient) { }

  signup(user:any){
    return this.httpClient.post<{message:string}>(`${this.userUrl}/api/signup`, user);
  }

  getAllUsers() {
    return this.httpClient.get<{users:any, message:string}>(`${this.userUrl}/api/allUsers`);
  }

  getUserById(id:number){
    // api/users/5
    return this.httpClient.get(`${this.userUrl}/${id}`);
  }

  deleteUser(id:number) {
    return this.httpClient.delete(`${this.userUrl}/${id}`);
  }

  editUser(user:any){
    return this.httpClient.put(`${this.userUrl}/${user.id}`, user);
  }

  login(user:any) {
    return this.httpClient.post<{message:string, user:any}>
    (`${this.userUrl}/api/login`, user);
  }


}
