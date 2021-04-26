import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { IngresosEffects } from './ingresos.effects';

describe('IngresosEffects', () => {
  let actions$: Observable<any>;
  let effects: IngresosEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IngresosEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<IngresosEffects>(IngresosEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
