import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutGironominaComponent } from './layout-gironomina.component';

describe('LayoutGironominaComponent', () => {
  let component: LayoutGironominaComponent;
  let fixture: ComponentFixture<LayoutGironominaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutGironominaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutGironominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
