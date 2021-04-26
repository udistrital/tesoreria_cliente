import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProyeccionComponent } from './tabla-proyeccion.component';

describe('TablaProyeccionComponent', () => {
  let component: TablaProyeccionComponent;
  let fixture: ComponentFixture<TablaProyeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaProyeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaProyeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
