import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailNotExist: boolean = false;
  passwordNotMatch: boolean = false;

  loginUserData = {
    password: undefined,
    email: undefined
  }

  constructor(private modalService: NgbModal,
              private authService:AuthService,
              private route: Router) { }


  ngOnInit(): void {

  }
  onSubmit(f: NgForm) {}

  loginUser() {
    this.authService.login(this.loginUserData)
      .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        localStorage.setItem('role', res.roles)
        this.route.navigate(['/home'])
      },
      error =>{
        this.emailNotExist = error.error.status == 404 ? true : false
        this.passwordNotMatch = error.error.status == 403 ? true : false
        console.log(error.error.status)
      }
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
