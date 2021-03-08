import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetErogacionComponent } from './set-erogacion.component';

describe('SetErogacionComponent', () => {
  let component: SetErogacionComponent;
  let fixture: ComponentFixture<SetErogacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetErogacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetErogacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
