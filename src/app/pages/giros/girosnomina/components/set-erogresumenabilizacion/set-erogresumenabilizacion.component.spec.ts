import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetErogresumenabilizacionComponent } from './set-erogresumenabilizacion.component';

describe('SetErogresumenabilizacionComponent', () => {
  let component: SetErogresumenabilizacionComponent;
  let fixture: ComponentFixture<SetErogresumenabilizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetErogresumenabilizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetErogresumenabilizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
