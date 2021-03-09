import { TestBed } from '@angular/core/testing';

import { AvancesService } from './avances.service';

describe('AvancesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvancesService = TestBed.get(AvancesService);
    expect(service).toBeTruthy();
  });
});
