import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  emailExists:boolean = false;

  registerUserData = {
    name: undefined,
    surname: undefined,
    email: undefined,
    password: undefined
  }

  constructor(private authService: AuthService,
              private route: Router) { }

  ngOnInit(): void {

  }

  onSubmit(f: NgForm) {
   /* const registerObserver = {
      next: x => console.log('User is registered'),
      error: err => console.log( err)
    };
    console.log(f.value);
    this.authService.Register(f.value).
    subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this.route.navigate(['/home'])
      },
      err => console.log(err)
    );*/
  }

  registerUser() {
    this.authService.Register(this.registerUserData).
    subscribe(
      res => {
        console.log(res)
        this.authService.setAuth(res.token)
        localStorage.setItem('token', res.token)
        this.route.navigate(['/home'])

      },
      error => {
        this.emailExists = error.error.status == 409 ? true : false
      }
    );
  }
}



