import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBoletinComponent } from './crear-boletin.component';

describe('CrearBoletinComponent', () => {
  let component: CrearBoletinComponent;
  let fixture: ComponentFixture<CrearBoletinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearBoletinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearBoletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
