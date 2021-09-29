import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  // definir l'adresse
  // matchUrl = 'api/matches';
  matchUrl = 'http://localhost:3000';

  constructor(private httpClient:HttpClient) { }

  // Get all objects
  getAllMatches() {
    return this.httpClient.get<{message:string, matches:any}>(`${this.matchUrl}/api/myMatches`);
  }

  //Get one Object
  getMatchById(id:string) {
    return this.httpClient.get<{match:any}>(`${this.matchUrl}/api/getMatch/${id}`);
  }

  // Add object to DB
  addMatch(match:any){
    return this.httpClient.post(`${this.matchUrl}/api/addMatch`, match);
  }

  // Delete Object By ID
  deleteMatch(id:string) {
    return this.httpClient.delete(`${this.matchUrl}/api/deleteMatch/${id}`);
  }

  // Edit Object



}
