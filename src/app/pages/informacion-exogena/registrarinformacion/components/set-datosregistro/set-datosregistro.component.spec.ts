import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDatosregistroComponent } from './set-datosregistro.component';

describe('SetDatosregistroComponent', () => {
  let component: SetDatosregistroComponent;
  let fixture: ComponentFixture<SetDatosregistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDatosregistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDatosregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
