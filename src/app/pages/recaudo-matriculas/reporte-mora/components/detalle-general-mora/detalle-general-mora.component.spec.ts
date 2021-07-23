import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleGeneralMoraComponent } from './detalle-general-mora.component';

describe('DetalleGeneralMoraComponent', () => {
  let component: DetalleGeneralMoraComponent;
  let fixture: ComponentFixture<DetalleGeneralMoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleGeneralMoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleGeneralMoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
