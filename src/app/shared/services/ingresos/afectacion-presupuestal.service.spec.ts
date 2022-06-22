import { TestBed } from '@angular/core/testing';

import { AfectacionPresupuestalService } from './afectacion-presupuestal.service';

describe('AfectacionPresupuestalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AfectacionPresupuestalService = TestBed.get(AfectacionPresupuestalService);
    expect(service).toBeTruthy();
  });
});
