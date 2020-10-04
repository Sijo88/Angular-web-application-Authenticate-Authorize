import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import {Userlogin} from '../models/User'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  currentUser: Userlogin;
  returnUrl: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService)
    {
      // this.currentUser=this.authenticationService.CurrentUserValue;
      this.authenticationService.logout();
    }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f() { return this.loginForm.controls; }
  onSubmit(){
    
    if(this.loginForm.invalid)
    {
      alert('Enter UserName & Password');
      return true;
    }
    

    this.authenticationService.login(this.f.username.value,this.f.password.value)
                              .subscribe(data => {
                                this.router.navigate(['product']);
                              },
                              error => {
                                 alert('Please enter valid UserName & Password');
                              });

  }

}
