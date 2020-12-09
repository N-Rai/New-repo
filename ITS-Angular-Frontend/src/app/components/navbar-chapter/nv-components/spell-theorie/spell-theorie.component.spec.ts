import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellTheorieComponent } from './spell-theorie.component';

describe('SpellTheorieComponent', () => {
  let component: SpellTheorieComponent;
  let fixture: ComponentFixture<SpellTheorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellTheorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellTheorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
