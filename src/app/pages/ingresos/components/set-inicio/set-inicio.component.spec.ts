import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetInicioComponent } from './set-inicio.component';

describe('SetInicioComponent', () => {
  let component: SetInicioComponent;
  let fixture: ComponentFixture<SetInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
