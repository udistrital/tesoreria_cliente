import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutReversarComponent } from './layout-reversar.component';

describe('LayoutReversarComponent', () => {
  let component: LayoutReversarComponent;
  let fixture: ComponentFixture<LayoutReversarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutReversarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutReversarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
