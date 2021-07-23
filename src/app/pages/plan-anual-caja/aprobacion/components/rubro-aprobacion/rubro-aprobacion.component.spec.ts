import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubroAprobacionComponent } from './rubro-aprobacion.component';

describe('RubroAprobacionComponent', () => {
  let component: RubroAprobacionComponent;
  let fixture: ComponentFixture<RubroAprobacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubroAprobacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubroAprobacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
