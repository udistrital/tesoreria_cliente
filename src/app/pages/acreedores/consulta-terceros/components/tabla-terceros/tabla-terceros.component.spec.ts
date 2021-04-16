import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTercerosComponent } from './tabla-terceros.component';

describe('TablaTercerosComponent', () => {
  let component: TablaTercerosComponent;
  let fixture: ComponentFixture<TablaTercerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaTercerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaTercerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
