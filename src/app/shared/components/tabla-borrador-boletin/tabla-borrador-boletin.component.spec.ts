import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaBorradorBoletinComponent } from './tabla-borrador-boletin.component';

describe('TablaBorradorBoletinComponent', () => {
  let component: TablaBorradorBoletinComponent;
  let fixture: ComponentFixture<TablaBorradorBoletinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaBorradorBoletinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaBorradorBoletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
