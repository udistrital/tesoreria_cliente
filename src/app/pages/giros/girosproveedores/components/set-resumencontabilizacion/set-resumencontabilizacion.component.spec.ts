import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetResumencontabilizacionComponent } from './set-resumencontabilizacion.component';

describe('SetResumencontabilizacionComponent', () => {
  let component: SetResumencontabilizacionComponent;
  let fixture: ComponentFixture<SetResumencontabilizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetResumencontabilizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetResumencontabilizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
