import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosSeguimientoPacComponent } from './datos-seguimiento-pac.component';

describe('DatosSeguimientoPacComponent', () => {
  let component: DatosSeguimientoPacComponent;
  let fixture: ComponentFixture<DatosSeguimientoPacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosSeguimientoPacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosSeguimientoPacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
