import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutGiroproveedoresComponent } from './layout-giroproveedores.component';

describe('LayoutGiroproveedoresComponent', () => {
  let component: LayoutGiroproveedoresComponent;
  let fixture: ComponentFixture<LayoutGiroproveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutGiroproveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutGiroproveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
