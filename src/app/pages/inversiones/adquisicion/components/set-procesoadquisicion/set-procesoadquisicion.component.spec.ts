import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProcesoadquisicionComponent } from './set-procesoadquisicion.component';

describe('SetProcesoadquisicionComponent', () => {
  let component: SetProcesoadquisicionComponent;
  let fixture: ComponentFixture<SetProcesoadquisicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetProcesoadquisicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetProcesoadquisicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
