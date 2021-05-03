import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetConsultaingresosComponent } from './set-consultaingresos.component';

describe('SetConsultaingresosComponent', () => {
  let component: SetConsultaingresosComponent;
  let fixture: ComponentFixture<SetConsultaingresosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetConsultaingresosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetConsultaingresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
