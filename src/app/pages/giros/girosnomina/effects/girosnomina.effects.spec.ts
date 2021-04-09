import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GirosnominaEffects } from './girosnomina.effects';

describe('GirosnominaEffects', () => {
  const actions$: Observable<any> = new Observable ();
  let effects: GirosnominaEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GirosnominaEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<GirosnominaEffects>(GirosnominaEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
