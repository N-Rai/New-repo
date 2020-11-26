import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RegistrationComponent} from '../registration/registration.component';
import {ResetPasswordComponent} from '../reset-password/reset-password.component';
import {AuthService} from '../../service/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private modalService: NgbModal, private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {

    const loginObserver = {
      next: x => console.log('User logged in '),
      error: err => console.log( err)
    };
    // console.log(f.value);
    this.authService.login(f.value).subscribe(loginObserver);

  }

  openRegistration() {
    const modalRef = this.modalService.open(RegistrationComponent);
  }

  openResetPassword(){
    const modalRef =  this.modalService.open(ResetPasswordComponent)
  }
}
