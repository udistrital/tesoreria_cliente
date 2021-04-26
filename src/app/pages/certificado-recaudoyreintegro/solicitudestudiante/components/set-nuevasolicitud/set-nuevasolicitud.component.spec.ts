import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetNuevasolicitudComponent } from './set-nuevasolicitud.component';

describe('SetNuevasolicitudComponent', () => {
  let component: SetNuevasolicitudComponent;
  let fixture: ComponentFixture<SetNuevasolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetNuevasolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetNuevasolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
