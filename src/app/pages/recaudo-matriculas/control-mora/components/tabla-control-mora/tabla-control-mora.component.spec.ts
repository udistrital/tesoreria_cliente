import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaControlMoraComponent } from './tabla-control-mora.component';

describe('TablaControlMoraComponent', () => {
  let component: TablaControlMoraComponent;
  let fixture: ComponentFixture<TablaControlMoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaControlMoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaControlMoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
