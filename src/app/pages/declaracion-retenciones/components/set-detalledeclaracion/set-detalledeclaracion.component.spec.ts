import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDetalledeclaracionComponent } from './set-detalledeclaracion.component';

describe('SetDetalledeclaracionComponent', () => {
  let component: SetDetalledeclaracionComponent;
  let fixture: ComponentFixture<SetDetalledeclaracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDetalledeclaracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDetalledeclaracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
