import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProcesoreinversionComponent } from './set-procesoreinversion.component';

describe('SetProcesoreinversionComponent', () => {
  let component: SetProcesoreinversionComponent;
  let fixture: ComponentFixture<SetProcesoreinversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetProcesoreinversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetProcesoreinversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
