import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGiroComponent } from './create-giro.component';

describe('CreateGiroComponent', () => {
  let component: CreateGiroComponent;
  let fixture: ComponentFixture<CreateGiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
