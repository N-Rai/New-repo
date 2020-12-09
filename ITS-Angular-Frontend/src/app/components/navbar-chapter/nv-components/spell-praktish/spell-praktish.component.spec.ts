import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellPraktishComponent } from './spell-praktish.component';

describe('SpellPraktishComponent', () => {
  let component: SpellPraktishComponent;
  let fixture: ComponentFixture<SpellPraktishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellPraktishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellPraktishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
