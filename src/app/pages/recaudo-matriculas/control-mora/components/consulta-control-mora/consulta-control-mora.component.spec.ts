import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaControlMoraComponent } from './consulta-control-mora.component';

describe('ConsultaControlMoraComponent', () => {
  let component: ConsultaControlMoraComponent;
  let fixture: ComponentFixture<ConsultaControlMoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaControlMoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaControlMoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
