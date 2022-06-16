import { TestBed } from '@angular/core/testing';

import { TranslateFormItemsService } from './translate-form-items.service';

describe('TranslateFormItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranslateFormItemsService = TestBed.get(TranslateFormItemsService);
    expect(service).toBeTruthy();
  });
});
