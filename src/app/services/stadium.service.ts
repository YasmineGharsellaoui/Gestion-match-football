import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {
  stadiumUrl = 'http://localhost:3000';

  constructor(private httpClient:HttpClient) { }

  // Get all objects
  getAllStadiums() {
    return this.httpClient.get<{message:string, stadiums:any}>(`${this.stadiumUrl}/myStadiums`);
  }

  //Get one Object
  getStadiumById(id:string) {
    return this.httpClient.get<{stadium:any}>(`${this.stadiumUrl}/getStadium/${id}`);
  }

  // Add object to DB
  addStadium(stadium:any){
    console.log('stadium in service', stadium);
    
    return this.httpClient.post(`${this.stadiumUrl}/addStadium`, stadium);
  }

   // Delete Player
   deleteStadium(id:string){
    return this.httpClient.delete(`${this.stadiumUrl}/deleteStadium/${id}`);
  }
}
