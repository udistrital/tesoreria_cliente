import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetInforegistroComponent } from './set-inforegistro.component';

describe('SetInforegistroComponent', () => {
  let component: SetInforegistroComponent;
  let fixture: ComponentFixture<SetInforegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetInforegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetInforegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
