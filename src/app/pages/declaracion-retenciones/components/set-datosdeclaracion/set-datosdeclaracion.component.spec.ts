import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDatosdeclaracionComponent } from './set-datosdeclaracion.component';

describe('SetDatosdeclaracionComponent', () => {
  let component: SetDatosdeclaracionComponent;
  let fixture: ComponentFixture<SetDatosdeclaracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDatosdeclaracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDatosdeclaracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
