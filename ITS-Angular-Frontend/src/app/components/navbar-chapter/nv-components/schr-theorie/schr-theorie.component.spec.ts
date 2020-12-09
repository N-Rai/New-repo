import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchrTheorieComponent } from './schr-theorie.component';

describe('SchrTheorieComponent', () => {
  let component: SchrTheorieComponent;
  let fixture: ComponentFixture<SchrTheorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchrTheorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchrTheorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
