import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../service/auth.service';

@Component({
  selector: 'app-schr-praktish',
  templateUrl: './schr-praktish.component.html',
  styleUrls: ['./schr-praktish.component.css']
})
export class SchrPraktishComponent implements OnInit {

  constructor(public _authService: AuthService) { }

  ngOnInit(): void {
  }

}
