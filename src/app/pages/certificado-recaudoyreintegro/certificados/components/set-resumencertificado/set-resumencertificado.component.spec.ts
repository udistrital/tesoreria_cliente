import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetResumencertificadoComponent } from './set-resumencertificado.component';

describe('SetResumencertificadoComponent', () => {
  let component: SetResumencertificadoComponent;
  let fixture: ComponentFixture<SetResumencertificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetResumencertificadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetResumencertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
