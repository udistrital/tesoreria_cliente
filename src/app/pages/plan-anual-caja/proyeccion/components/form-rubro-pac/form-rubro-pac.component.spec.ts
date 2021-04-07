import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRubroPacComponent } from './form-rubro-pac.component';

describe('FormRubroPacComponent', () => {
  let component: FormRubroPacComponent;
  let fixture: ComponentFixture<FormRubroPacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRubroPacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRubroPacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
