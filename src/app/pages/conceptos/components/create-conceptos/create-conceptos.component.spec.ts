import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConceptosComponent } from './create-conceptos.component';

describe('CreateConceptosComponent', () => {
  let component: CreateConceptosComponent;
  let fixture: ComponentFixture<CreateConceptosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateConceptosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConceptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
