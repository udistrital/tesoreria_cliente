import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAnulacionComponent } from './tabla-anulacion.component';

describe('TablaAnulacionComponent', () => {
  let component: TablaAnulacionComponent;
  let fixture: ComponentFixture<TablaAnulacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaAnulacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAnulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
