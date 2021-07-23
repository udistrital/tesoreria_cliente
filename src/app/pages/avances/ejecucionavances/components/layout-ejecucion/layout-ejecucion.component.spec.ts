import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutEjecucionComponent } from './layout-ejecucion.component';

describe('LayoutEjecucionComponent', () => {
  let component: LayoutEjecucionComponent;
  let fixture: ComponentFixture<LayoutEjecucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutEjecucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutEjecucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
