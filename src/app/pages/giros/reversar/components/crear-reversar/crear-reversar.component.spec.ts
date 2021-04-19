import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearReversarComponent } from './crear-reversar.component';

describe('CrearReversarComponent', () => {
  let component: CrearReversarComponent;
  let fixture: ComponentFixture<CrearReversarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearReversarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearReversarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
