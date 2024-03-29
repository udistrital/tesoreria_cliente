import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as SharedActions from '../actions/shared.actions';
import { SharedService } from '../services/shared.service';
import { Store } from '@ngrx/store';
import { getAccionTabla, selectTiposID, selectVigencias } from '../selectors/shared.selectors';


@Injectable()
export class SharedEffects {

  constructor(
    private actions$: Actions,
    private sharedService: SharedService,
    private store: Store<any>
  ) { }


  loadShareds$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(SharedActions.loadShareds),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY)
    );
  });

  GetArbolRubro$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.GetArbolRubro),
      mergeMap((branch) =>
        this.sharedService.getArbol(branch.branch)
          .pipe(
            map(data => SharedActions.LoadArbolRubro(data)),
            catchError(data => of(SharedActions.CatchError(data))))
      )
    );
  });

  GetArbolCuentaContableDebito$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.GetArbolCuentaContableDebito),
      mergeMap((branch) =>
        this.sharedService.getArbolCuentaContable()
          .pipe(
            map(data => SharedActions.LoadArbolCuentaContableDebito(data)),
            catchError(data => of(SharedActions.CatchError(data))))
      )
    );
  });

  GetArbolCuentaContableCredito$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.GetArbolCuentaContableCredito),
      mergeMap((branch) =>
        this.sharedService.getArbolCuentaContable()
          .pipe(
            map(data => SharedActions.LoadArbolCuentaContableCredito(data)),
            catchError(data => of(SharedActions.CatchError(data))))
      )
    );
  });

  GetVigenciaActual$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.GetVigenciaActual),
      mergeMap((offset) =>
        this.sharedService.getVigenciaActual(offset.offset)
          .pipe(
            map(data => SharedActions.LoadVigenciaActual(data)),
            catchError(data => of(SharedActions.CatchError(data))))
      )
    );
  });

  GetModalidadesSeleccion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.GetModalidadesSeleccion),
      mergeMap(() =>
        this.sharedService.getModalidadesDeSeleccion()
          .pipe(
            map(data => SharedActions.LoadModalidadesSeleccion([data])),
            catchError(data => of(SharedActions.CatchError(data))))
      )
    );
  });

  getVigencias$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.getVigencias),
      withLatestFrom(this.store.select(selectVigencias)),
      mergeMap((accion) => {
        if (!accion || !accion[1])
          return this.sharedService.getVigencias()
            .pipe(map(data => SharedActions.loadVigencias([data])),
              catchError(data => of(SharedActions.CatchError(data))));
        else
          return of(SharedActions.loadVigencias(accion[1]));
      })
    );
  });

  getTiposID$ = createEffect(() => {
    return this.actions$.pipe(ofType(SharedActions.getTiposID),
      withLatestFrom(this.store.select(selectTiposID)),
      mergeMap((action) => {
        if (!action || !action[1])
          return this.sharedService.getTiposID(true).pipe(
            map(data => SharedActions.loadTiposID([data])),
            catchError(data => of(SharedActions.CatchError(data))));
        else
          return of(SharedActions.loadTiposID(action[1]));
      }));
  });

  getDatosID$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.getDatosID), mergeMap((params) =>
        this.sharedService.getDatosID(params.numero, params.tipo, params.limit, params.fields)
          .pipe(map((data: any[]) => {
            if (data)
              data = data.map((tercero) => (
                { TerceroId: tercero.TerceroId }
              ));
            return SharedActions.loadDatosID({ clave: params.clave, datosId: data });
          }), catchError(data => of(SharedActions.CatchError(data))))));
  });

  // Consulta de proveedores
  getProveedores$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerDatosProvedor),
      mergeMap((accion) => this.sharedService.getDatosProveedores(
        accion && accion.id ? accion.id : null,
        accion && accion.query ? accion.query : null)
        .pipe(map(data => SharedActions.cargarDatosProvedor(
          { Proveedores: ((data && data.Data) ? data.Data : data) })),
          catchError(data => of(SharedActions.CatchError(data))))));
  });

  // Consulta de telefonos proveedores
  getTelefonosProveedores$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerTelefonosProvedores),
      mergeMap((accion) =>
        this.sharedService.getTelefonosProveedores(
          accion && accion.id ? accion.id : null,
          accion && accion.query ? accion.query : null)
          .pipe(map(data => SharedActions.cargarTelefonosProvedores(
            { TelefonosProveedores: ((data && data.Data) ? data.Data : data) })),
            catchError(data => of(SharedActions.CatchError(data))))));
  });

  // Consulta de ordenadores de gasto
  getOrdenadores$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerOrdenadores),
      mergeMap((accion) =>
        this.sharedService.getOrdenadores(
          accion && accion.id ? accion.id : null,
          accion && accion.query ? accion.query : null,
          accion.limit ? accion.limit : null)
          .pipe(map(data => SharedActions.cargarOdrenadores(
            { Ordenadores: ((data && data.Data) ? data.Data : data) })),
            catchError(data => of(SharedActions.CatchError(data))))));
  });

  // Consulta de dependencias
  getDependencias$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerDependencias),
      mergeMap((accion) =>
        this.sharedService.getDependencias(
          accion && accion.id ? accion.id : null,
          accion && accion.query ? accion.query : null,
          accion.limit ? accion.limit : null)
          .pipe(map(data => SharedActions.cargarDependencias(
            { Dependencias: ((data && data.Data) ? data.Data : data) })),
            catchError(data => of(SharedActions.CatchError(data))))));
  });

  // Consulta de facultades y proyectos
  getFacultadesProyectos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerFacultadesProyectos),
      mergeMap((accion) =>
        this.sharedService.getFacultadesProyectos(
          accion && accion.id ? accion.id : null,
          accion && accion.query ? accion.query : null,
          accion.limit ? accion.limit : null)
          .pipe(map(data => SharedActions.cargarFacultadesProyectos(
            { FacultadesProyectos: ((data && data.Data) ? data.Data : data) })),
            catchError(data => of(SharedActions.CatchError(data))))));
  });

  // Consulta de bancos

  getBancos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerBancos),
      mergeMap((accion) =>
      this.sharedService.getBancos(
        accion && accion.id ? accion.id : null,
        accion && accion.query ? accion.query : null,
        accion.limit ? accion.limit : null)
        .pipe(map(data => SharedActions.cargarBancos(
          { Bancos: ((data && data.Data) ? data.Data : data)})),
          catchError(data => of(SharedActions.CatchError(data))))));
        });

  // Consulta de id para guardar sucursales
  // Consulta a la tabla info_complementaria en terceros para saber que id se asociará en la llave foranea al momento de crear la sucursal

  getIdSucursales$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerIdSucursales),
      mergeMap((accion) =>
      this.sharedService.getIdSucursales(
        accion && accion.query ? accion.query : null,
      )
      .pipe(map(data => SharedActions.cargarIdSucursales(
        { IdSucursales: ((data && data.Data) ? data.Data : data)})),
        catchError(data => of(SharedActions.CatchError(data))))));
  });

  getSucursales$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(SharedActions.obtenerSucursales),
        mergeMap((accion) => this.sharedService.getSucursales(accion && accion.query ? accion.query : null)
            .pipe(map(data => SharedActions.cargarSucursales(
              { Sucursales: ((data && data.Data) ? data.Data : data)})),
            catchError(data => of(SharedActions.CatchError(data)))))

            // })), catchError(data => of(SharedActions.CatchError(data)))))

    );
  });

  getDivisas$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerDivisas),
      mergeMap((accion) =>
      this.sharedService.getDivisas(
        accion && accion.query ? accion.query : null,
        accion.limit ? accion.limit : null
      )
      .pipe(map(data => SharedActions.cargarDivisas(
        { Divisas: ((data && data.Data) ? data.Data : data)})),
        catchError(data => of (SharedActions.CatchError(data)))))
    );
  });

  getRecursos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerRecursos),
      mergeMap((codigo) =>
      this.sharedService.getRecursos(codigo.codigo)
      .pipe(map(data => SharedActions.cargarRecursos(
        { Recursos: ((data && data.Data) ? data.Data : data)})),
        catchError(data => of (SharedActions.CatchError(data)))))
    );
  });

  getTipoCuenta$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerTipoCuenta),
      mergeMap((accion) =>
      this.sharedService.getTipoCuenta(
        accion && accion.query ? accion.query : null,
        accion.limit ? accion.limit : null
      )
      .pipe(map(data => SharedActions.cargarTipoCuenta(
        {TipoCuentas: ((data && data.Data) ? data.Data : data)})),
        catchError(data => of (SharedActions.CatchError(data)))))
    );
  });

  getCuentasBancarias$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(SharedActions.obtenerCuentasBancarias),
        mergeMap((accion) => this.sharedService.getCuentasBancarias((accion && accion.query) ? accion.query : null)
            .pipe(map(data => SharedActions.cargarCuentasBancarias(
              { CuentasBancarias: ((data && data.Data) ? data.Data : data)})),
            catchError(data => of(SharedActions.CatchError(data)))))
    );
  });

  getTipoContribuyente$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerTipoContribuyente),
      mergeMap((accion) => this.sharedService.getTipoContribuyente((accion && accion.query) ? accion.query : null)
          .pipe(map(data => SharedActions.cargarTipoContribuyente(
            {TipoContribuyente: ((data && data.Data) ? data.Data : data)})),
            catchError(data => of(SharedActions.CatchError(data)))))
    );
  });

  getTipoDocumento$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerTipoDocumento),
      mergeMap((accion) => this.sharedService.getTipoDocumento((accion && accion.query) ? accion.query : null)
          .pipe(map(data => SharedActions.cargarTipoDocumento(
            {TipoDocumento: ((data && data.Data) ? data.Data : data)})),
            catchError(data => of(SharedActions.CatchError(data)))))
    );
  });

  getBancoByNit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerBancoByNit),
      mergeMap((accion) => this.sharedService.getBancoByNit((accion && accion.query) ? accion.query : null)
          .pipe(map(data => SharedActions.cargarBancoByNit(
            {BancoByNit: ((data && data.Data) ? data.Data : data)})),
            catchError(data => of(SharedActions.CatchError(data)))))
    );
  });

  getInfoComplementaria$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerInfoComplementaria),
      mergeMap((accion) => this.sharedService.getInfoComplementaria((accion && accion.query) ? accion.query : null)
          .pipe(map(data => SharedActions.cargarInfoComplementaria(
            {InfoComplementaria: ((data && data.Data) ? data.Data : data)})),
            catchError(data => of(SharedActions.CatchError(data)))))
    );
  });

  getBancoMid$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerBancosMid),
      mergeMap(() => this.sharedService.getBancoMid()
          .pipe(map(data => SharedActions.cargarBancosMid(
            {BancosMid: ((data && data.Data) ? data.Data : data)})),
            catchError(data => of(SharedActions.CatchError(data)))))
    );
  });

  getTipoTercero$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerTipoTercero),
      mergeMap((accion) => this.sharedService.getTipoTercero(accion && accion.query ? accion.query : null)
          .pipe(map(data => SharedActions.cargarTipoTercero(
            {TipoTercero: ((data && data.Data) ? data.Data : data)})),
            catchError(data => of(SharedActions.CatchError(data)))))
    );
  });

  getConceptos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerConceptos),
      mergeMap((accion) => this.sharedService.getConceptos(accion && accion.query ? accion.query : null)
          .pipe(map(data => SharedActions.cargarConceptos(
            {Conceptos: ((data && data.Data) ? data.Data : data)})),
            catchError(data => of(SharedActions.CatchError(data)))))
    );
  });

  getConcepto$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerConcepto),
      mergeMap((accion) => this.sharedService.getConcepto(accion && accion.query ? accion.query : null, accion.concepto)
          .pipe(map(data => SharedActions.cargarConcepto(
            {Concepto: ((data && data.Data) ? data.Data : data)})),
            catchError(data => of(SharedActions.CatchError(data)))))
    );
  });

  getConceptosByCodigo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerConceptosByCodigo),
      mergeMap((accion) => this.sharedService.getConceptosByCodigo(accion.codigo)
      .pipe(map(data => SharedActions.cargarConceptosByCodigo(
        {ConceptosByCodigo: ((data && data.Data) ? data.Data : data)})),
        catchError(data => of(SharedActions.CatchError(data)))))
    );
  });

  getRubro$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerRubro),
      mergeMap((accion) => this.sharedService.getRubro(accion.codRubro)
          .pipe(map(data => SharedActions.cargarRubro(
            {Rubro: ((data && data.Data) ? data.Data : data)})),
            catchError(data => of(SharedActions.CatchError(data)))))
    );
  });

  getCuentaDebito$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerCuentaDebito),
      mergeMap((accion) => this.sharedService.getCuentaContable(accion.idCuentaContable)
          .pipe(map(data => SharedActions.cargarCuentaDebito(
            {CuentaDebito: ((data && data.Data) ? data.Data : data)})),
            catchError(data => of(SharedActions.CatchError(data)))))
    );
  });

  getCuentaCredito$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerCuentaCredito),
      mergeMap((accion) => this.sharedService.getCuentaContable(accion.idCuentaContable)
          .pipe(map(data => SharedActions.cargarCuentaCredito(
            {CuentaCredito: ((data && data.Data) ? data.Data : data)})),
            catchError(data => of(SharedActions.CatchError(data)))))
    );
  });

  getParametros$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerParametros),
      mergeMap((accion) => this.sharedService.getParametros(accion && accion.query ? accion.query : null)
          .pipe(map(data => SharedActions.cargarParametros(
            {Parametros: ((data && data.Data) ? data.Data : data)})),
            catchError(data => of(SharedActions.CatchError(data)))))
    );
  });

  getParametrosHijos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerParametrosHijos),
      mergeMap((accion) => this.sharedService.getParametrosHijos(accion && accion.query ? accion.query : null)
          .pipe(map(data => SharedActions.cargarParametrosHijos(
            {ParametrosHijos: ((data && data.Data) ? data.Data : data)})),
            catchError(data => of(SharedActions.CatchError(data)))))
    );
  });

  getTipoComprobante$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SharedActions.obtenerTipoDocumentos),
      mergeMap((accion) => this.sharedService.getTipoDocumentos(accion && accion.query ? accion.query : null)
          .pipe(map(data => SharedActions.cargarTipoDocumentos(
            {TipoDocumentos: ((data && data.Data) ? data.Data : data)})),
            catchError(data => of(SharedActions.CatchError(data)))))
    );
  });

}
