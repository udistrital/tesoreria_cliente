import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDatosgeneralesComponent } from './set-datosgenerales.component';

describe('SetDatosgeneralesComponent', () => {
  let component: SetDatosgeneralesComponent;
  let fixture: ComponentFixture<SetDatosgeneralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDatosgeneralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDatosgeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
