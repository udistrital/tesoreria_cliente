import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetIdentificarComponent } from './set-identificar.component';

describe('SetIdentificarComponent', () => {
  let component: SetIdentificarComponent;
  let fixture: ComponentFixture<SetIdentificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetIdentificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetIdentificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
