import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AvancesEffects } from './avances.effects';

describe('AvancesEffects', () => {
  const actions$ = new Observable<any>();
  let effects: AvancesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AvancesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<AvancesEffects>(AvancesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
