import { TestBed } from '@angular/core/testing';

import { ProyeccionServiceService } from './proyeccion-service.service';

describe('ProyeccionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProyeccionServiceService = TestBed.get(ProyeccionServiceService);
    expect(service).toBeTruthy();
  });
});
