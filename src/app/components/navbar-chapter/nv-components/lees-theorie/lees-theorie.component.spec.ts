import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeesTheorieComponent } from './lees-theorie.component';

describe('LeesTheorieComponent', () => {
  let component: LeesTheorieComponent;
  let fixture: ComponentFixture<LeesTheorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeesTheorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeesTheorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
