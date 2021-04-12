import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAnexosComponent } from './set-anexos.component';

describe('SetAnexosComponent', () => {
  let component: SetAnexosComponent;
  let fixture: ComponentFixture<SetAnexosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetAnexosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetAnexosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
