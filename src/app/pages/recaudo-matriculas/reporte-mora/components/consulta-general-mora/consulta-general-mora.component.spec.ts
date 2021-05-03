import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaGeneralMoraComponent } from './consulta-general-mora.component';

describe('ConsultaGeneralMoraComponent', () => {
  let component: ConsultaGeneralMoraComponent;
  let fixture: ComponentFixture<ConsultaGeneralMoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaGeneralMoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaGeneralMoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
