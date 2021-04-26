import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFuentesComponent } from './form-fuentes.component';

describe('FormFuentesComponent', () => {
  let component: FormFuentesComponent;
  let fixture: ComponentFixture<FormFuentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFuentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
