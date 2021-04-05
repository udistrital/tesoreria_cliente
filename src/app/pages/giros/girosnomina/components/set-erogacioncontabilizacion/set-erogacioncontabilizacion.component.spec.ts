import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetErogacioncontabilizacionComponent } from './set-erogacioncontabilizacion.component';

describe('SetErogacioncontabilizacionComponent', () => {
  let component: SetErogacioncontabilizacionComponent;
  let fixture: ComponentFixture<SetErogacioncontabilizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetErogacioncontabilizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetErogacioncontabilizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
