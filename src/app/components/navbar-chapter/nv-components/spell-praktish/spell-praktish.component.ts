import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../service/auth.service';

@Component({
  selector: 'app-spell-praktish',
  templateUrl: './spell-praktish.component.html',
  styleUrls: ['./spell-praktish.component.css']
})
export class SpellPraktishComponent implements OnInit {

  constructor(public _authService: AuthService) { }

  ngOnInit(): void {
  }

}
