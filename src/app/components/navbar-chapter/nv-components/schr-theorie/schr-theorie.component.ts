import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../service/auth.service';

@Component({
  selector: 'app-schr-theorie',
  templateUrl: './schr-theorie.component.html',
  styleUrls: ['./schr-theorie.component.css']
})
export class SchrTheorieComponent implements OnInit {

  constructor(public _authService: AuthService) { }

  ngOnInit(): void {
  }

}
