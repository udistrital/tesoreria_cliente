import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCierrePacComponent } from './tabla-cierre-pac.component';

describe('TablaCierrePacComponent', () => {
  let component: TablaCierrePacComponent;
  let fixture: ComponentFixture<TablaCierrePacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaCierrePacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCierrePacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
