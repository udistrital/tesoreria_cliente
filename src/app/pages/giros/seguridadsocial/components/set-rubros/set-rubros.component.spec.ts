import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRubrosComponent } from './set-rubros.component';

describe('SetRubrosComponent', () => {
  let component: SetRubrosComponent;
  let fixture: ComponentFixture<SetRubrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetRubrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetRubrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
