import { Component, OnInit } from '@angular/core';
import {SpellTheorieComponent} from './nv-components/spell-theorie/spell-theorie.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar-chapter',
  templateUrl: './navbar-chapter.component.html',
  styleUrls: ['./navbar-chapter.component.css']
})
export class NavbarChapterComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }


}
