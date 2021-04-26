import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetConsultatercerosComponent } from './set-consultaterceros.component';

describe('SetConsultatercerosComponent', () => {
  let component: SetConsultatercerosComponent;
  let fixture: ComponentFixture<SetConsultatercerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetConsultatercerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetConsultatercerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
