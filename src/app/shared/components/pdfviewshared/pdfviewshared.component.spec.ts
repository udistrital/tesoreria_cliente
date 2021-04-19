import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfviewsharedComponent } from './pdfviewshared.component';

describe('PdfviewsharedComponent', () => {
  let component: PdfviewsharedComponent;
  let fixture: ComponentFixture<PdfviewsharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfviewsharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfviewsharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
