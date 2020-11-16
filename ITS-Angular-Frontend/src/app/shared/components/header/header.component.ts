import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

/*  btnClick = function() {
    this.router.navigateByUrl('/register');
    console.log('button is clicked');
  };*/
}
