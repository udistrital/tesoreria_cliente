import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetInfoafectacionComponent } from './set-infoafectacion.component';

describe('SetInfoafectacionComponent', () => {
  let component: SetInfoafectacionComponent;
  let fixture: ComponentFixture<SetInfoafectacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetInfoafectacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetInfoafectacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
