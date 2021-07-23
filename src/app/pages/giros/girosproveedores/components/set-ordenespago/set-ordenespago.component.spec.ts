import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOrdenespagoComponent } from './set-ordenespago.component';

describe('SetOrdenespagoComponent', () => {
  let component: SetOrdenespagoComponent;
  let fixture: ComponentFixture<SetOrdenespagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetOrdenespagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetOrdenespagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
