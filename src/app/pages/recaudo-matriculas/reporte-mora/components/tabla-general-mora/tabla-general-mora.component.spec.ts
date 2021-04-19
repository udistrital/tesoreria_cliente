import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaGeneralMoraComponent } from './tabla-general-mora.component';

describe('TablaGeneralMoraComponent', () => {
  let component: TablaGeneralMoraComponent;
  let fixture: ComponentFixture<TablaGeneralMoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaGeneralMoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaGeneralMoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
