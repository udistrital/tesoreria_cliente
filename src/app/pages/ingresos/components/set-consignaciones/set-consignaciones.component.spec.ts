import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetConsignacionesComponent } from './set-consignaciones.component';

describe('SetConsignacionesComponent', () => {
  let component: SetConsignacionesComponent;
  let fixture: ComponentFixture<SetConsignacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetConsignacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetConsignacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
