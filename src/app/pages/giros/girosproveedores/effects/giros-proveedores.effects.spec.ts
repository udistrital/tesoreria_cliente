import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GirosProveedoresEffects } from './giros-proveedores.effects';

describe('GirosProveedoresEffects', () => {
  const actions$: Observable<any> = new Observable ();
  let effects: GirosProveedoresEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GirosProveedoresEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<GirosProveedoresEffects>(GirosProveedoresEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
