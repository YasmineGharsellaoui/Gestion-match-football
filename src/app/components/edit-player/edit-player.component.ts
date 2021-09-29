import { FormGroup, FormBuilder } from '@angular/forms';
import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  id:any;
  player:any;
  playerForm:FormGroup;
  constructor(
    private activatedRoute:ActivatedRoute,
    private playerService:PlayerService,
    private formBuilder: FormBuilder,
    private router:Router) { }

  ngOnInit() {
    this.playerForm = this.formBuilder.group({
      name:[''],
      poste:[''],
      description:[''],
      image:['']
    })
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.playerService.getPlayerById(this.id).subscribe(
      data => {
        this.player = data.player;
      }
    )
  }

  validateEdit() {
    this.playerService.editPlayer(this.player).subscribe(
      (data) => {
        console.log('message data', data.message);
        
        this.router.navigate(['admin']);
      }
    )
  }

}
