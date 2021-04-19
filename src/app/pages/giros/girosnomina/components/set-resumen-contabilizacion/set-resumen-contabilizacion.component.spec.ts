import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetResumenContabilizacionComponent } from './set-resumen-contabilizacion.component';

describe('SetResumenContabilizacionComponent', () => {
  let component: SetResumenContabilizacionComponent;
  let fixture: ComponentFixture<SetResumenContabilizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetResumenContabilizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetResumenContabilizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
