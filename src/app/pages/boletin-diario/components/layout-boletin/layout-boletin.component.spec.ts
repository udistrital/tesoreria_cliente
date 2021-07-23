import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBoletinComponent } from './layout-boletin.component';

describe('LayoutBoletinComponent', () => {
  let component: LayoutBoletinComponent;
  let fixture: ComponentFixture<LayoutBoletinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutBoletinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutBoletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
