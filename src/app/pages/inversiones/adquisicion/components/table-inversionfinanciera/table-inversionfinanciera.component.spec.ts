import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdquisicioninversionComponent } from './adquisicioninversion.component';

describe('AdquisicioninversionComponent', () => {
  let component: AdquisicioninversionComponent;
  let fixture: ComponentFixture<AdquisicioninversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdquisicioninversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdquisicioninversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
