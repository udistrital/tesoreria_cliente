import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleControlMoraComponent } from './detalle-control-mora.component';

describe('DetalleControlMoraComponent', () => {
  let component: DetalleControlMoraComponent;
  let fixture: ComponentFixture<DetalleControlMoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleControlMoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleControlMoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
