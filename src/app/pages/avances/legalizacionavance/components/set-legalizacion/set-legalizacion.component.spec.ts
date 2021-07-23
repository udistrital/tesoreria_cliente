import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLegalizacionComponent } from './set-legalizacion.component';

describe('SetLegalizacionComponent', () => {
  let component: SetLegalizacionComponent;
  let fixture: ComponentFixture<SetLegalizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetLegalizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetLegalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
