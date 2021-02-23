import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GirochequesEffects } from './girocheques.effects';

describe('GirochequesEffects', () => {
  const actions$: Observable<any> = new Observable ();
  let effects: GirochequesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GirochequesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<GirochequesEffects>(GirochequesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
