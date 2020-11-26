import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../../../components/login/login.component';
import {RegistrationComponent} from '../../../components/registration/registration.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ResetPasswordComponent} from '../../../components/reset-password/reset-password.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openLoginForm(): void {
    const modalRef = this.modalService.open(LoginComponent);
  }

  openRegistrationForm(): void{
    const modalRef = this.modalService.open(RegistrationComponent);
  }
  openResetPasswordForm(): void{
    const modalRef = this.modalService.open(ResetPasswordComponent);
  }

/*  btnClick = function() {
    this.router.navigateByUrl('/register');
    console.log('button is clicked');
  };*/




}
