import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetGenerarcertificadoComponent } from './set-generarcertificado.component';

describe('SetGenerarcertificadoComponent', () => {
  let component: SetGenerarcertificadoComponent;
  let fixture: ComponentFixture<SetGenerarcertificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetGenerarcertificadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetGenerarcertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
