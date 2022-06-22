import { TestBed } from '@angular/core/testing';

import { TipoIngresoService } from './tipo-ingreso.service';

describe('TipoIngresoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoIngresoService = TestBed.get(TipoIngresoService);
    expect(service).toBeTruthy();
  });
});
