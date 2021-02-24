import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTipoavanceComponent } from './set-tipoavance.component';

describe('SetTipoavanceComponent', () => {
  let component: SetTipoavanceComponent;
  let fixture: ComponentFixture<SetTipoavanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetTipoavanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTipoavanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
