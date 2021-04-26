import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAprobacionFuentesComponent } from './form-aprobacion-fuentes.component';

describe('FormAprobacionFuentesComponent', () => {
  let component: FormAprobacionFuentesComponent;
  let fixture: ComponentFixture<FormAprobacionFuentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAprobacionFuentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAprobacionFuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
