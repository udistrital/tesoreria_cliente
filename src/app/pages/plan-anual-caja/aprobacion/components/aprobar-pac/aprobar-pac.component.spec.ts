import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarPacComponent } from './aprobar-pac.component';

describe('AprobarPacComponent', () => {
  let component: AprobarPacComponent;
  let fixture: ComponentFixture<AprobarPacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobarPacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobarPacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
