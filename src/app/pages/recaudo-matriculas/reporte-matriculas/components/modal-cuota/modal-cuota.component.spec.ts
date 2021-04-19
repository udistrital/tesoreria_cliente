import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCuotaComponent } from './modal-cuota.component';

describe('ModalCuotaComponent', () => {
  let component: ModalCuotaComponent;
  let fixture: ComponentFixture<ModalCuotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCuotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
