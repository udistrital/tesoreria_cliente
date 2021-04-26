import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubroSeguimientoComponent } from './rubro-seguimiento.component';

describe('RubroSeguimientoComponent', () => {
  let component: RubroSeguimientoComponent;
  let fixture: ComponentFixture<RubroSeguimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubroSeguimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubroSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
