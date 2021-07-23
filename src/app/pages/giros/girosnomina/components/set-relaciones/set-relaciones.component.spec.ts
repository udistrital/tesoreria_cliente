import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRelacionesComponent } from './set-relaciones.component';

describe('SetRelacionesComponent', () => {
  let component: SetRelacionesComponent;
  let fixture: ComponentFixture<SetRelacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetRelacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetRelacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
