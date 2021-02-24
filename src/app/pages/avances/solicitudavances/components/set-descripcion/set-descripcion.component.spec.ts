import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDescripcionComponent } from './set-descripcion.component';

describe('SetDescripcionComponent', () => {
  let component: SetDescripcionComponent;
  let fixture: ComponentFixture<SetDescripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDescripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
