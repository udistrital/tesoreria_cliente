import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDetallegiroComponent } from './set-detallegiro.component';

describe('SetDetallegiroComponent', () => {
  let component: SetDetallegiroComponent;
  let fixture: ComponentFixture<SetDetallegiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDetallegiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDetallegiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
