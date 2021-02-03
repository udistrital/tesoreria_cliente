import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetAsociarrequisitoComponent } from './set-asociarrequisito.component';

describe('SetAsociarrequisitoComponent', () => {
  let component: SetAsociarrequisitoComponent;
  let fixture: ComponentFixture<SetAsociarrequisitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetAsociarrequisitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetAsociarrequisitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
