import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetalleavanceComponent } from './show-detalleavance.component';

describe('ShowDetalleavanceComponent', () => {
  let component: ShowDetalleavanceComponent;
  let fixture: ComponentFixture<ShowDetalleavanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetalleavanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetalleavanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
