import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDatosComponent } from './detalle-datos.component';

describe('DetalleDatosComponent', () => {
  let component: DetalleDatosComponent;
  let fixture: ComponentFixture<DetalleDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
