import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BoletinDiarioEffects } from './boletin-diario.effects';

describe('BoletinDiarioEffects', () => {
  const actions$: Observable<any> = new Observable ();
  let effects: BoletinDiarioEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BoletinDiarioEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<BoletinDiarioEffects>(BoletinDiarioEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
