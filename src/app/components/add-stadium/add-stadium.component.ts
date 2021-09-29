import { StadiumService } from './../../services/stadium.service';
import { StadiumComponent } from './../stadium/stadium.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  stadium: any = {};
  stadiumForm: FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private stadiumService:StadiumService,
    private router:Router) { }

  ngOnInit() {
    this.stadiumForm = this.formBuilder.group({
      name: [''],
      country: [''],
      capacity: ['']
    })
  }
  addStadium() {
    console.log('Here my match object', this.stadium );
    this.stadiumService.addStadium(this.stadium).subscribe(
      () => {
        console.log('Match added successfully');
        this.router.navigate(['admin']);
      }
    )
  }
}
