import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetConsultayaprobacionComponent } from './set-consultayaprobacion.component';

describe('SetConsultayaprobacionComponent', () => {
  let component: SetConsultayaprobacionComponent;
  let fixture: ComponentFixture<SetConsultayaprobacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetConsultayaprobacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetConsultayaprobacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
