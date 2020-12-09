import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RegistrationComponent} from '../registration/registration.component';
import {ResetPasswordComponent} from '../reset-password/reset-password.component';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    password: undefined,
    email: undefined
  }

  constructor(private modalService: NgbModal,
              private authService:AuthService,
              private route: Router) { }


  ngOnInit(): void {

  }

  onSubmit(f: NgForm) {

    // console.log(f.value);
    /*this.authService.login(f.value).subscribe(
      res => console.log(res),
      err => console.log(err),
    );*/

  }
  loginUser() {
    this.authService.login(this.loginUserData)
      .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this.route.navigate(['/home'])
      },
      err => console.log(err),
    );
  }
  openRegistration() {
    this.route.navigate(['/register'])
    //const modalRef = this.modalService.open(RegistrationComponent);
  }

  openResetPassword(){
    this.route.navigate(['/reset-password'])
    //const modalRef =  this.modalService.open(ResetPasswordComponent)
  }


}
