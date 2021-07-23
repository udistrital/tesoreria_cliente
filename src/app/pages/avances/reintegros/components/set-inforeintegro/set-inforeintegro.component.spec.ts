import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetInforeintegroComponent } from './set-inforeintegro.component';

describe('SetInforeintegroComponent', () => {
  let component: SetInforeintegroComponent;
  let fixture: ComponentFixture<SetInforeintegroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetInforeintegroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetInforeintegroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
