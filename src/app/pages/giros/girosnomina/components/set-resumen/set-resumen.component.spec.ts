import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetResumenComponent } from './set-resumen.component';

describe('SetResumenComponent', () => {
  let component: SetResumenComponent;
  let fixture: ComponentFixture<SetResumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetResumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
