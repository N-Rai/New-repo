import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../service/auth.service';

@Component({
  selector: 'app-lees-praktish',
  templateUrl: './lees-praktish.component.html',
  styleUrls: ['./lees-praktish.component.css']
})
export class LeesPraktishComponent implements OnInit {


  constructor(public _authService: AuthService) { }

  ngOnInit(): void {
  }

}
