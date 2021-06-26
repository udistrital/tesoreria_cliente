import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAfectacionComponent } from './set-afectacion.component';

describe('SetAfectacionComponent', () => {
  let component: SetAfectacionComponent;
  let fixture: ComponentFixture<SetAfectacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetAfectacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetAfectacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
