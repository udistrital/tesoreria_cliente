import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosAprobacionPacComponent } from './datos-aprobacion-pac.component';

describe('DatosAprobacionPacComponent', () => {
  let component: DatosAprobacionPacComponent;
  let fixture: ComponentFixture<DatosAprobacionPacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosAprobacionPacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosAprobacionPacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
