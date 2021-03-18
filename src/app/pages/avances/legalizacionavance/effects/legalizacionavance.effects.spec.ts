import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LegalizacionavanceEffects } from './legalizacionavance.effects';

describe('LegalizacionavanceEffects', () => {
  const actions$ = new Observable<any>();
  let effects: LegalizacionavanceEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LegalizacionavanceEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<LegalizacionavanceEffects>(LegalizacionavanceEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
