import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetConciliaciondeclaracionComponent } from './set-conciliaciondeclaracion.component';

describe('SetConciliaciondeclaracionComponent', () => {
  let component: SetConciliaciondeclaracionComponent;
  let fixture: ComponentFixture<SetConciliaciondeclaracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetConciliaciondeclaracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetConciliaciondeclaracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
