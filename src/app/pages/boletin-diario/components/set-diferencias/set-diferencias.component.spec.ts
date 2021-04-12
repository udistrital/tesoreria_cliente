import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDiferenciasComponent } from './set-diferencias.component';

describe('SetDiferenciasComponent', () => {
  let component: SetDiferenciasComponent;
  let fixture: ComponentFixture<SetDiferenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDiferenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDiferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
