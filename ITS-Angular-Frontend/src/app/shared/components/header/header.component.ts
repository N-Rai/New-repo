import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


import {LoginComponent} from '../../../components/login/login.component';
import {RegistrationComponent} from '../../../components/registration/registration.component';
import {ResetPasswordComponent} from '../../../components/reset-password/reset-password.component';

import {AuthService} from '../../../service/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal,
              public _authService: AuthService) { }

  ngOnInit(): void {
  }



 /* openLoginForm(): void {
    const modalRef = this.modalService.open(LoginComponent);
  }

  openRegistrationForm(): void{
    const modalRef = this.modalService.open(RegistrationComponent);
  }
  openResetPasswordForm(): void{
    const modalRef = this.modalService.open(ResetPasswordComponent);
  }*/






}
