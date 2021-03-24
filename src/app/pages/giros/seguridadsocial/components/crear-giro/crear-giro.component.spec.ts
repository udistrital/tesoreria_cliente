import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearGiroComponent } from './crear-giro.component';

describe('CrearGiroComponent', () => {
  let component: CrearGiroComponent;
  let fixture: ComponentFixture<CrearGiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearGiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearGiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
