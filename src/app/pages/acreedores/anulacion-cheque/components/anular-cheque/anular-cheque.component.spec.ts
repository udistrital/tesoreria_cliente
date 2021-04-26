import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnularChequeComponent } from './anular-cheque.component';

describe('AnularChequeComponent', () => {
  let component: AnularChequeComponent;
  let fixture: ComponentFixture<AnularChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnularChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnularChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
