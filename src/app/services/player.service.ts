import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  // playerUrl = 'api/players';
  playerUrl = 'http://localhost:3000';
  constructor(private httpClient:HttpClient) { }

  // Get all Players from DB
  getAllPlayers() {
    return this.httpClient.get<{message:string, players:any}>(`${this.playerUrl}/api/allPlayers`);
  }

  // Get Player By ID
  getPlayerById(id:string){
    return this.httpClient.get<{player:any}>(`${this.playerUrl}/api/getPlayer/${id}`);
  }

  // Delete Player
  deletePlayer(id:number){
    return this.httpClient.delete(`${this.playerUrl}/${id}`);
  }

  // Add Player
  addPlayer(player:any,image:File) {
    let formData = new FormData();
    formData.append('name', player.name);
    formData.append('poste', player.poste);
    formData.append('description', player.description);
    formData.append('dateOfBirth', player.dateOfBirth);
    formData.append('image', image);
    return this.httpClient.post(`${this.playerUrl}/api/addPlayer`, formData);
  }

  // Edit Player
  editPlayer(player:any) {      
    return this.httpClient.put<{message: string}>(`${this.playerUrl}/api/editPlayer/${player._id}`, player);
  }

  // search Player
  searchPlayer(term:string){
    return this.httpClient.get<{searchedPlayers:any}>(`${this.playerUrl}/api/search/${term}`)
  }
  
  getAllReservation(id:any){
    return this.httpClient.get<{allReservations:any}>(`${this.playerUrl}/myReservations/${id}`)
  }
}
