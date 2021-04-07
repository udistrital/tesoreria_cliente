import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSolicitudesComponent } from './tabla-solicitudes.component';

describe('TablaSolicitudesComponent', () => {
  let component: TablaSolicitudesComponent;
  let fixture: ComponentFixture<TablaSolicitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaSolicitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
