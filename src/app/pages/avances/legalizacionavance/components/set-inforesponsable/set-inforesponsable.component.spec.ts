import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetInforesponsableComponent } from './set-inforesponsable.component';

describe('SetInforesponsableComponent', () => {
  let component: SetInforesponsableComponent;
  let fixture: ComponentFixture<SetInforesponsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetInforesponsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetInforesponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
