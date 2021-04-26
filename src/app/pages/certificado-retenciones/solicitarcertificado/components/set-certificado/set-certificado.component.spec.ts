import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCertificadoComponent } from './set-certificado.component';

describe('SetCertificadoComponent', () => {
  let component: SetCertificadoComponent;
  let fixture: ComponentFixture<SetCertificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCertificadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
