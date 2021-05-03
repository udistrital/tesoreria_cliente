import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoprevalidadorComponent } from './formatoprevalidador.component';

describe('FormatoprevalidadorComponent', () => {
  let component: FormatoprevalidadorComponent;
  let fixture: ComponentFixture<FormatoprevalidadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatoprevalidadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatoprevalidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
