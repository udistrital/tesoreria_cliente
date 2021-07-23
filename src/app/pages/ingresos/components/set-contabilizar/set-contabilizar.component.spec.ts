import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetContabilizarComponent } from './set-contabilizar.component';

describe('SetContabilizarComponent', () => {
  let component: SetContabilizarComponent;
  let fixture: ComponentFixture<SetContabilizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetContabilizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetContabilizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
