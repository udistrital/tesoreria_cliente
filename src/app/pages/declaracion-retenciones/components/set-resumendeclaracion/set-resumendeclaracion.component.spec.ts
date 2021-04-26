import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetResumendeclaracionComponent } from './set-resumendeclaracion.component';

describe('SetResumendeclaracionComponent', () => {
  let component: SetResumendeclaracionComponent;
  let fixture: ComponentFixture<SetResumendeclaracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetResumendeclaracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetResumendeclaracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
