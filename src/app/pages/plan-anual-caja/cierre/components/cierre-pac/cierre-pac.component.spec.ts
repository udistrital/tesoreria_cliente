import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CierrePacComponent } from './cierre-pac.component';

describe('CierrePacComponent', () => {
  let component: CierrePacComponent;
  let fixture: ComponentFixture<CierrePacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CierrePacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CierrePacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
