import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoPacComponent } from './seguimiento-pac.component';

describe('SeguimientoPacComponent', () => {
  let component: SeguimientoPacComponent;
  let fixture: ComponentFixture<SeguimientoPacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientoPacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoPacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
