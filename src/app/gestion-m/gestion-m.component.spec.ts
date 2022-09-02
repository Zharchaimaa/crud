import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMComponent } from './gestion-m.component';

describe('GestionMComponent', () => {
  let component: GestionMComponent;
  let fixture: ComponentFixture<GestionMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
