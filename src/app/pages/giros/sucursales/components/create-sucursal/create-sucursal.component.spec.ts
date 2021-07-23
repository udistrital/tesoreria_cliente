import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBancoComponent } from './create-banco.component';

describe('CreateBancoComponent', () => {
  let component: CreateBancoComponent;
  let fixture: ComponentFixture<CreateBancoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBancoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
