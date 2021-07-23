import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetInfofuncionarioComponent } from './set-infofuncionario.component';

describe('SetInfofuncionarioComponent', () => {
  let component: SetInfofuncionarioComponent;
  let fixture: ComponentFixture<SetInfofuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetInfofuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetInfofuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
