import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // 1 - déclarer l'objet JSON
  contact: any = {};
  // 2 - déclarer le formGroup (ensemble d'inputs)
  contactForm: FormGroup;
  // 3 - déclarer le formBuilder qui construit le formGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName: [''],
      lastName: ['']
    })
  }
  addContact() {
    console.log('Here my contact object', this.contact )
    alert('Boutton clicked');
  }

}
