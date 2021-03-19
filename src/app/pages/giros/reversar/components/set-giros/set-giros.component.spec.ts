import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetGirosComponent } from './set-giros.component';

describe('SetGirosComponent', () => {
  let component: SetGirosComponent;
  let fixture: ComponentFixture<SetGirosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetGirosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetGirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
