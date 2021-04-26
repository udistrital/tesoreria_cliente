import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetElegirentidadComponent } from './set-elegirentidad.component';

describe('SetElegirentidadComponent', () => {
  let component: SetElegirentidadComponent;
  let fixture: ComponentFixture<SetElegirentidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetElegirentidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetElegirentidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
