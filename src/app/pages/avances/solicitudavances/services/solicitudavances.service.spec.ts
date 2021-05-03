import { TestBed } from '@angular/core/testing';

import { SolicitudavancesService } from './solicitudavances.service';

describe('SolicitudavancesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SolicitudavancesService = TestBed.get(SolicitudavancesService);
    expect(service).toBeTruthy();
  });
});
