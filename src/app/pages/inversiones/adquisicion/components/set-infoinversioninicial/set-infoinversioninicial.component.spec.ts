import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetInfoinversioninicialComponent } from './set-infoinversioninicial.component';

describe('SetInfoinversioninicialComponent', () => {
  let component: SetInfoinversioninicialComponent;
  let fixture: ComponentFixture<SetInfoinversioninicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetInfoinversioninicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetInfoinversioninicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
