import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTipodeavanceComponent } from './set-tipodeavance.component';

describe('SetTipodeavanceComponent', () => {
  let component: SetTipodeavanceComponent;
  let fixture: ComponentFixture<SetTipodeavanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetTipodeavanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTipodeavanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
