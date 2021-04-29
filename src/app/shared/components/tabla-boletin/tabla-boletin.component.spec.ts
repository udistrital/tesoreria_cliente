import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaBoletinComponent } from './tabla-boletin.component';

describe('TablaBoletinComponent', () => {
  let component: TablaBoletinComponent;
  let fixture: ComponentFixture<TablaBoletinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaBoletinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaBoletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
