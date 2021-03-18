import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetInfolegalizacionComponent } from './set-infolegalizacion.component';

describe('SetInfolegalizacionComponent', () => {
  let component: SetInfolegalizacionComponent;
  let fixture: ComponentFixture<SetInfolegalizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetInfolegalizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetInfolegalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
