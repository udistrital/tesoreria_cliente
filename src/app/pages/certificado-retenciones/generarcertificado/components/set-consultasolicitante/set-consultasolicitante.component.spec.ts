import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetConsultasolicitanteComponent } from './set-consultasolicitante.component';

describe('SetConsultasolicitanteComponent', () => {
  let component: SetConsultasolicitanteComponent;
  let fixture: ComponentFixture<SetConsultasolicitanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetConsultasolicitanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetConsultasolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
