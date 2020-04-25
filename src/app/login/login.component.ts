import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username=''
  password=''
  invalidLogin=false;
  errorMessage='Inavlid Credentials'
  successMessage: string;
  loginSuccess=false;

  constructor(private router: Router, private loginservice:AuthenticationService) { }

  ngOnInit(): void {
  }
  checkLogin()
  {
    if(this.loginservice.authentication(this.username,this.password))
    {
      this.router.navigate([''])
      this.invalidLogin=false;
      this.loginSuccess=true
      this.successMessage='Login Successful';

    }
    else
    {
      this.invalidLogin=true;
      this.loginSuccess=false;
    }
  }

}
