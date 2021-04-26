import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendimientosComponent } from './rendimientos.component';

describe('RendimientosComponent', () => {
  let component: RendimientosComponent;
  let fixture: ComponentFixture<RendimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
