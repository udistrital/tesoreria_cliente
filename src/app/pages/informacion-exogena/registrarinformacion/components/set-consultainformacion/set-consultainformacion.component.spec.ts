import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetConsultainformacionComponent } from './set-consultainformacion.component';

describe('SetConsultainformacionComponent', () => {
  let component: SetConsultainformacionComponent;
  let fixture: ComponentFixture<SetConsultainformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetConsultainformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetConsultainformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
