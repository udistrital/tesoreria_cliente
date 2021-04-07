import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroinicialComponent } from './registroinicial.component';

describe('RegistroinicialComponent', () => {
  let component: RegistroinicialComponent;
  let fixture: ComponentFixture<RegistroinicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroinicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroinicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
