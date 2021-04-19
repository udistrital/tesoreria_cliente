import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDetallesComponent } from './set-detalles.component';

describe('SetDetallesComponent', () => {
  let component: SetDetallesComponent;
  let fixture: ComponentFixture<SetDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
