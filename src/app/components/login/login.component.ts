import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  connectedUser: any = {};
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [''],
      pwd: ['']
    });
  }

  login() {
    this.userService.login(this.connectedUser).subscribe(
      (data) => {
        if (data.message === '2') {         
          localStorage.setItem('connectedUser', JSON.stringify(data.user));
          if (data.user.role === 'admin') {
            this.router.navigate(['admin']);
            location.reload();
          } else {
            this.router.navigate(['']);
            location.reload();
          }
        }
      }
    )
  }

}
