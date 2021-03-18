import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetallereintegroComponent } from './show-detallereintegro.component';

describe('ShowDetallereintegroComponent', () => {
  let component: ShowDetallereintegroComponent;
  let fixture: ComponentFixture<ShowDetallereintegroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetallereintegroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetallereintegroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
