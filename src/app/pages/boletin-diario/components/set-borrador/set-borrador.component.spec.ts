import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetBorradorComponent } from './set-borrador.component';

describe('SetBorradorComponent', () => {
  let component: SetBorradorComponent;
  let fixture: ComponentFixture<SetBorradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetBorradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetBorradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
