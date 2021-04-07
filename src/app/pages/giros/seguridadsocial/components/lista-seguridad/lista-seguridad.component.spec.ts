import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSeguridadComponent } from './lista-seguridad.component';

describe('ListaSeguridadComponent', () => {
  let component: ListaSeguridadComponent;
  let fixture: ComponentFixture<ListaSeguridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSeguridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
