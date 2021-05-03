import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaindividualComponent } from './busquedaindividual.component';

describe('BusquedaindividualComponent', () => {
  let component: BusquedaindividualComponent;
  let fixture: ComponentFixture<BusquedaindividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaindividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaindividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
