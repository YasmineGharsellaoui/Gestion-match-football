import { Router } from '@angular/router';
import { MatchService } from './../../services/match.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  match: any = {};
  matchForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private matchService:MatchService,
    private router:Router) { }

  ngOnInit() {
    this.matchForm = this.formBuilder.group({
      teamOne: [''],
      teamTwo: [''],
      scoreOne: [''],
      scoreTwo: [''],
      logoOne:[''],
      logoTwo:['']
    })
  }
  addMatch() {
    console.log('Here my match object', this.match );
    this.matchService.addMatch(this.match).subscribe(
      () => {
        console.log('Match added successfully');
        this.router.navigate(['matches']);
      }
    )
  }

}
