import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirosAsociadosComponent } from './giros-asociados.component';

describe('GirosAsociadosComponent', () => {
  let component: GirosAsociadosComponent;
  let fixture: ComponentFixture<GirosAsociadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirosAsociadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirosAsociadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
