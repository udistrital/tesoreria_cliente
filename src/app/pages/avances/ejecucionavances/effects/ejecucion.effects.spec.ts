import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EjecucionEffects } from './ejecucion.effects';

describe('EjecucionEffects', () => {
  const actions$: Observable<any> = new Observable();
  let effects: EjecucionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EjecucionEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<EjecucionEffects>(EjecucionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
