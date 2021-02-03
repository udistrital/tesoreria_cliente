import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RequisitosavancesEffects } from './requisitosavances.effects';

describe('RequisitosavancesEffects', () => {
  const actions$: Observable<any> = new Observable();
  let effects: RequisitosavancesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RequisitosavancesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<RequisitosavancesEffects>(RequisitosavancesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
