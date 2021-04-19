import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSeguridadsocialComponent } from './layout-seguridadsocial.component';

describe('LayoutSeguridadsocialComponent', () => {
  let component: LayoutSeguridadsocialComponent;
  let fixture: ComponentFixture<LayoutSeguridadsocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutSeguridadsocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSeguridadsocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
