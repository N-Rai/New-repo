import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../service/auth.service';

@Component({
  selector: 'app-lees-theorie',
  templateUrl: './lees-theorie.component.html',
  styleUrls: ['./lees-theorie.component.css']
})
export class LeesTheorieComponent implements OnInit {

  constructor(public _authService: AuthService) { }

  ngOnInit(): void {
  }

}
