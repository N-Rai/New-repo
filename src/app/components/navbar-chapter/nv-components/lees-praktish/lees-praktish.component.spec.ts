import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeesPraktishComponent } from './lees-praktish.component';

describe('LeesPraktishComponent', () => {
  let component: LeesPraktishComponent;
  let fixture: ComponentFixture<LeesPraktishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeesPraktishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeesPraktishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
