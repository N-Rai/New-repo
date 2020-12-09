import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchrPraktishComponent } from './schr-praktish.component';

describe('SchrPraktishComponent', () => {
  let component: SchrPraktishComponent;
  let fixture: ComponentFixture<SchrPraktishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchrPraktishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchrPraktishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
