import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EspecificacionesavancesEffects } from './especificacionesavances.effects';

describe('EspecificacionesavancesEffects', () => {
  const actions$: Observable<any> = new Observable();
  let effects: EspecificacionesavancesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EspecificacionesavancesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<EspecificacionesavancesEffects>(EspecificacionesavancesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
