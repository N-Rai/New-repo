import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarChapterComponent } from './navbar-chapter.component';

describe('NavbarChapterComponent', () => {
  let component: NavbarChapterComponent;
  let fixture: ComponentFixture<NavbarChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
