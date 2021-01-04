import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../service/auth.service';

@Component({
  selector: 'app-spell-theorie',
  templateUrl: './spell-theorie.component.html',
  styleUrls: ['./spell-theorie.component.css']
})
export class SpellTheorieComponent implements OnInit {

  constructor(public _authService: AuthService) { }

  ngOnInit(): void {
  }

}
