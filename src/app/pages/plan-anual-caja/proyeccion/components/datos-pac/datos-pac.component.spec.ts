import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPacComponent } from './datos-pac.component';

describe('DatosPacComponent', () => {
  let component: DatosPacComponent;
  let fixture: ComponentFixture<DatosPacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosPacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
