import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEjecucionComponent } from './modal-ejecucion.component';

describe('ModalEjecucionComponent', () => {
  let component: ModalEjecucionComponent;
  let fixture: ComponentFixture<ModalEjecucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEjecucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEjecucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
