import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetallevalorizacionComponent } from './show-detallevalorizacion.component';

describe('ShowDetallevalorizacionComponent', () => {
  let component: ShowDetallevalorizacionComponent;
  let fixture: ComponentFixture<ShowDetallevalorizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetallevalorizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetallevalorizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
