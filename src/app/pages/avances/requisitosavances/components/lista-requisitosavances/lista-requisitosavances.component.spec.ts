import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRequisitosavancesComponent } from './lista-requisitosavances.component';

describe('ListaRequisitosavancesComponent', () => {
  let component: ListaRequisitosavancesComponent;
  let fixture: ComponentFixture<ListaRequisitosavancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRequisitosavancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRequisitosavancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
