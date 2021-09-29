import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  allPlayers: any;
  isConnected: boolean;
  constructor(private playerService:PlayerService) { }

  ngOnInit() {
    this.isConnected = true;
    this.playerService.getAllPlayers().subscribe(
      data => {
        this.allPlayers = data.players;
      }
    )
  }

  display(obj:any,x:string) {
    return (obj.poste === x);
  }

}
