import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetConcentracionComponent } from './set-concentracion.component';

describe('SetConcentracionComponent', () => {
  let component: SetConcentracionComponent;
  let fixture: ComponentFixture<SetConcentracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetConcentracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetConcentracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
