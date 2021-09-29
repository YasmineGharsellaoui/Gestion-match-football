import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MustMatch } from 'src/app/validators/comparePwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService:UserService,
    private router:Router
    ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(5), Validators.required]],
      lastName: ['', Validators.minLength(4)],
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.minLength(8), Validators.maxLength(12)]],
      confirmPwd: [''],
      tel: ['']
    }, 
      {
        validator: MustMatch('pwd','confirmPwd')
      }
      );
  }

  signup(user:any) {   
    let secondPart = user.email.substring(user.email.indexOf("@"),
    user.email.length); 
    user.role =  (secondPart === '@admin.com')  ? 'admin' : 'user'; 
    //  if (secondPart === '@admin.com')   {
    //    user.role = 'admin';
    //  } else {
    //    user.role = 'user';
    //  }   
    this.userService.signup(user).subscribe(
      () => {
        this.router.navigate(['']);
      }
    )
  }

}
