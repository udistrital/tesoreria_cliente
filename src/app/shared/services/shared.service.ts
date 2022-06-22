import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { PopUpManager } from '../../@core/managers/popUpManager';
import { RequestManager } from '../../@core/managers/requestManager';
import { getArbolRubro } from '../selectors/shared.selectors';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  behavior: BehaviorSubject<any>;

  constructor(private rqManager: RequestManager, private store: Store<any>) {
    this.behavior = new BehaviorSubject({
      width: window.innerWidth,
      height: window.innerHeight,
      size: this.catchSize(window.innerWidth),
    });

    fromEvent(window, 'resize')
      .pipe(
        map((event: any) => {
          return {
            width: event.target.innerWidth,
            height: event.target.innerHeight,
            size: this.catchSize(event.target.innerWidth),
          };
        })
      )
      .subscribe((data) => {
        this.behavior.next(data);
      });
  }

  /**
   * Gets arbol
   *  returns one tree level at once.
   * @param [branch] tree's branch to request info from the API
   * @returns  branch information.
   */
  public getArbol(branch?: string) {
    this.rqManager.setPath('PLAN_CUENTAS_MONGO_SERVICE');
    // this.rqManager.setPath('DUMMY_SERVICE');
    // Set the optional branch for the API request.
    // const unidadEjecutora = 1;
    const params = {
      rama: branch,
    };
    // call request manager for the tree's data.
    return this.rqManager.get(`arbol_rubro/arbol/${branch}`, params);
  }

  /**
   * Gets arbol cuenta contable
   *  returns one tree level at once.
   * @param [branch] tree's branch to request info from the API
   * @returns  branch information.
   */
  public getArbolCuentaContable() {
    this.rqManager.setPath('CUENTAS_CONTABLES_SERVICE');
    return this.rqManager.get(`nodo_cuenta_contable`);
  }

  public getRubro(codigo: string) {
    this.rqManager.setPath('PLAN_CUENTAS_MONGO_SERVICE');
    return this.rqManager.get(`arbol_rubro/arbol/${codigo}`);
  }

  public getCuentaContable(idCuentaContable: string) {
    this.rqManager.setPath('CUENTAS_CONTABLES_SERVICE');
    return this.rqManager.get(
      `nodo_cuenta_contable/codigo/${idCuentaContable}`
    );
  }

  /**
   * Gets Vigencia Actual
   *  returns one tree level at once.
   * @param [offset]
   * @returns  vigencia information.
   */
  public getVigenciaActual(offset?: number) {
    this.rqManager.setPath('PLAN_CUENTAS_MONGO_SERVICE');
    const params = {
      offset,
    };
    let query = '';
    if (offset) {
      query = `?offset=${offset}`;
    }
    return this.rqManager.get(
      `vigencia/vigencia_actual_area/1${query}`,
      params
    );
  }

  /**
   * Gets Vigencias
   * @returns Listado de todas las vigencias
   */
  public getVigencias() {
    this.rqManager.setPath('PLAN_CUENTAS_MONGO_SERVICE');
    return this.rqManager.get('vigencia/vigencias_total');
  }

  /**
   * Gets TiposID
   * @returns  Tipos de identificacion de terceros
   */

  public getTiposID(activo?: boolean) {
    this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
    let query = '';
    if (activo === true || activo === false) query = `Activo:${activo}`;
    const params = {
      fields: 'Nombre,Id',
      query: query,
    };
    return this.rqManager.get('tipo_documento', params);
  }

  /**
   * Gets DatosIdentificacion
   * @returns  Datos de identificacion de terceros
   */

  public getDatosID(
    numero?: string,
    tipo?: number,
    limit?: number,
    fields?: string,
  ) {
    this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
    const params = {
      query: `Numero:${numero},TipoDocumentoId.Id:${tipo}`,
      limit: limit ? limit : 1,
      fields: fields ? fields : 'TerceroId',
    };
    return this.rqManager.get('datos_identificacion', params);
  }

  /**
   *
   * @param id Id del proveedor
   * @param query Parámetros de consulta
   * @returns Consulta de proveedores
   */
  public getDatosProveedores(id?: number, query?: any) {
    this.rqManager.setPath('ADMINISTRATIVA_AMAZON_SERVICE');
    return this.rqManager.getv2('informacion_proveedor', id, query);
  }

  /**
   *
   * @param id Id del registro
   * @param query Parámetros de consulta
   * @returns Consulta de teléfonos de proveedores
   */
  public getTelefonosProveedores(id?: number, query?: any) {
    this.rqManager.setPath('ADMINISTRATIVA_AMAZON_SERVICE');
    return this.rqManager.getv2('proveedor_telefono', id, query);
  }

  /**
   *
   * @param id Identificación de orden
   * @param query Query para buscar ordenes
   * @param limit Límite de cantidad de ordenes (todos por defecto)
   * @returns
   */
  public getOrdenadores(id?: number, query?: any, limit?: any) {
    this.rqManager.setPath('ADMINISTRATIVA_AMAZON_SERVICE');
    if (!id) {
      if (!limit) limit = 0;
      if (!query) query = {};
      if (!query.Estado) query.Estado = true;
    }
    return this.rqManager.getv2(
      'ordenadores',
      id,
      query,
      null,
      null,
      null,
      limit,
    );
  }

  /**
   *
   * @param id Identificación de dependencia
   * @param query Parámetros de búsqueda
   * @param limit Cantidad de registros (todos por defecto)
   * @returns
   */
  public getDependencias(id?: number, query?: any, limit?: any) {
    this.rqManager.setPath('OIKOS_SERVICE');
    if (!id) {
      if (!limit) limit = 0;
      if (!query) query = {};
      if (query.Activo === undefined || query.Activo === null)
        query.Activo = true;
    }
    return this.rqManager.getv2(
      'dependencia',
      id,
      query,
      null,
      null,
      null,
      limit,
    );
  }

  /**
   *
   * @param id Identificación de registro
   * @param query Parámetros de consulta
   * @param limit Cantidad de registros (todos por defento)
   * @returns
   */
  public getFacultadesProyectos(id?: number, query?: any, limit?: any) {
    this.rqManager.setPath('OIKOS_SERVICE');
    if (!id && !limit) limit = 0;
    return this.rqManager.getv2(
      'dependencia_padre/FacultadesConProyectos',
      id,
      query,
      null,
      null,
      null,
      limit,
    );
  }

  /**
   *
   * @param id Identificación de orden
   * @param query Query para buscar bancos
   * @param limit Límite de cantidad de bancos (todos por defecto)
   * @returns
   */
  public getBancos(id?: number, query?: any, limit?: any) {
    this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
    if (!id) {
      if (!limit) limit = 0;
      if (!query) query = {};
    }
    return this.rqManager.getv2(
      'tercero_tipo_tercero',
      id,
      query,
      null,
      null,
      null,
      limit,
    );
  }

  /**
   *
   * @param query Query para buscar id de sucursales para agregar en la fk de info_complementaria_tercero
   * @param limit Limite de cantidad de sucursales
   * @returns
   */
  public getSucursales(query?: any, limit?: number) {
    this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
    if (!limit) limit = 0;
    if (!query) query = {};
    if (!query.InfoComplementariaId__CodigoAbreviacion) {
      query.InfoComplementariaId__CodigoAbreviacion = 'SUC';
    }
    return this.rqManager.getv2(
      'info_complementaria_tercero',
      null,
      query,
      null,
      null,
      null,
      limit,
    );
  }

  /**
   * @param query Query para buscar sucursales
   * @returns
   */
  public getIdSucursales(query?: any) {
    this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
    if (!query) query = {};
    if (!query.CodigoAbreviacion) query.CodigoAbreviacion = 'SUC';
    return this.rqManager.getv2(
      'info_complementaria',
      null,
      query,
      null,
      null,
      null,
      null,
    );
  }

  /**
   * @param query Query para buscar las divisas de parametros
   * @param limit Limite de cantidad de divisas
   * @returns
   */
  public getDivisas(query?: any, limit?: number) {
    this.rqManager.setPath('PARAMETROS_CRUD_SERVICE');
    if (!limit) limit = 0;
    if (!query) query = {};
    if (!query.CodigoAbreviacion)
      query.TipoParametroId__CodigoAbreviacion = 'D';
    return this.rqManager.getv2(
      'parametro',
      null,
      query,
      null,
      null,
      null,
      null,
    );
  }

  /**
   * Gets arbol
   *  returns one tree level at once.
   * @param [codigo] codigo que se va a consultar
   * @returns  codigo
   */
  public getRecursos(codigo: string) {
    this.rqManager.setPath('PLAN_CUENTAS_MONGO_SERVICE');
    return this.rqManager.get(`arbol_rubro/arbol_reducido/${codigo}?nivel=1`);
  }

  /**
   * @param query Query para buscar los tipos de cuentas de parametros
   * @param limit Limite de cantidad de tipos de cuentas
   * @returns
   */
  public getTipoCuenta(query?: any, limit?: number) {
    this.rqManager.setPath('PARAMETROS_CRUD_SERVICE');
    if (!limit) limit = 0;
    if (!query) query = {};
    if (!query.CodigoAbreviacion)
      query.TipoParametroId__CodigoAbreviacion = 'CB';
    return this.rqManager.getv2(
      'parametro',
      null,
      query,
      null,
      null,
      null,
      null,
    );
  }

  /**
   *
   * @param query Query para buscar cuentas bancarias del crud de giros
   * @param limit Limite de cantidad de cuentas bancarias
   * @returns
   */
  public getCuentasBancarias(query?: any, limit?: number) {
    this.rqManager.setPath('GIROS_CRUD_SERVICE');
    if (!limit) limit = 0;
    if (!query) query = {};
    return this.rqManager.getv2(
      'cuenta_bancaria',
      null,
      query,
      null,
      null,
      null,
      limit,
    );
  }

  /**
   *
   * @param query Query para buscar el tipo de contribuyente del crud de terceros
   * @param limit Limite de cantidad de tipos de contribuyente
   * @returns
   */
  public getTipoContribuyente(query?: any, limit?: number) {
    this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
    if (!limit) limit = 0;
    if (!query) query = {};
    return this.rqManager.getv2(
      'tipo_contribuyente',
      null,
      query,
      null,
      null,
      null,
      limit,
    );
  }

  /**
   *
   * @param query Query para buscar el tipo de documento del crud de terceros
   * @param limit Limite de cantidad de tipos de documento
   * @returns
   */
  public getTipoDocumento(query?: any, limit?: number) {
    this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
    if (!limit) limit = 0;
    if (!query) query = {};
    return this.rqManager.getv2(
      'tipo_documento',
      null,
      query,
      null,
      null,
      null,
      limit,
    );
  }

  /**
   *
   * @param query Query para buscar el banco por NIT del crud de terceros
   * @param limit Limite de cantidad de bancos por NIT
   * @returns
   */
  public getBancoByNit(query?: any, limit?: number) {
    this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
    if (!limit) limit = 0;
    if (!query) query = {};
    return this.rqManager.getv2(
      'datos_identificacion',
      null,
      query,
      null,
      null,
      null,
      limit,
    );
  }

  /**
   *
   * @param query Query para buscar la info complementaria de los codigos de los bancos del crud de terceros
   * @param limit Limite de cantidad de info complementaria
   * @returns
   */
  public getInfoComplementaria(query?: any, limit?: number) {
    this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
    if (!limit) limit = 0;
    if (!query) query = {};
    return this.rqManager.getv2(
      'info_complementaria',
      null,
      query,
      null,
      null,
      null,
      limit,
    );
  }

  /**
   *
   * @returns
   */
  public getBancoMid() {
    this.rqManager.setPath('TESORERIA_MID_SERVICE');

    return this.rqManager.getv2('bancos', null, null, null, null, null, null);
  }

  /**
   *
   * @returns
   */
  public getCuentaBancariaBancoMid(query?: any, limit?: number) {
    this.rqManager.setPath('TESORERIA_MID_SERVICE');
    if (!limit) limit = -1;
    if (!query) query = {};

    return this.rqManager.getv2(
      'cuenta_bancaria_banco',
      null,
      query,
      null,
      null,
      null,
      limit,
    );
  }

  /**
   *
   * @param query Query para buscar los tipos de terceros del crud de terceros
   * @param limit Limite de cantidad de tipos de terceros
   * @returns
   */
  public getTipoTercero(query?: any, limit?: number) {
    this.rqManager.setPath('TERCEROS_CRUD_SERVICE');
    if (!limit) limit = 0;
    if (!query) query = {};
    return this.rqManager.getv2(
      'tipo_tercero',
      null,
      query,
      null,
      null,
      null,
      limit,
    );
  }

  /**
   *
   * @param query Query para buscar los conceptos del crud de cuentas contables
   * @param limit Limite de cantidad de conceptos
   * @returns
   */
  public getConceptos(query?: any, limit?: number) {
    this.rqManager.setPath('CUENTAS_CONTABLES_SERVICE');
    if (!limit) limit = 0;
    if (!query) query = {};
    return this.rqManager.getv2(
      'conceptos?FullTree=true',
      null,
      query,
      null,
      null,
      null,
      limit,
    );
  }

  /**
   *
   * @param query Query para buscar los conceptos del crud de cuentas contables
   * @param concepto concepto
   * @returns
   */
  public getConcepto(query?: any, concepto?: any) {
    this.rqManager.setPath('CUENTAS_CONTABLES_SERVICE');
    if (!query) query = {};
    return this.rqManager.getv2(
      `conceptos/${concepto}`,
      null,
      query,
      null,
      null,
      null,
      null,
    );
  }

  /**
   *
   * @param codigo Codigo a buscar en los conceptos
   * @returns
   */
  public getConceptosByCodigo(codigo: any) {
    this.rqManager.setPath('CUENTAS_CONTABLES_SERVICE');
    return this.rqManager.getv2(
      'conceptos/' + codigo,
      null,
      null,
      null,
      null,
      null,
      null,
    );
  }

  /**
   *
   * @param query Query para buscar los parametros del crud de parametros
   * @param limit Limite de cantidad de parametros
   * @returns
   */
  public getParametros(query?: any, limit?: number) {
    this.rqManager.setPath('PARAMETROS_CRUD_SERVICE');
    if (!limit) limit = 0;
    if (!query) query = {};
    return this.rqManager.getv2(
      'parametro',
      null,
      query,
      null,
      null,
      null,
      limit,
    );
  }

  /**
   *
   * @param query Query para buscar los parametros hijos del crud de parametros
   * @param limit Limite de cantidad de parametros hijos
   * @returns
   */
  public getParametrosHijos(query?: any, limit?: number) {
    this.rqManager.setPath('PARAMETROS_CRUD_SERVICE');
    if (!limit) limit = 0;
    if (!query) query = {};
    return this.rqManager.getv2(
      'parametro',
      null,
      query,
      null,
      null,
      null,
      limit,
    );
  }

  /**
   *
   * @param query Query para buscar los tipos de documentos crud de parametros
   * @param limit Limite de cantidad de tipos de documento
   * @returns
   */
  public getTipoDocumentos(query?: any, limit?: number) {
    this.rqManager.setPath('PARAMETROS_CRUD_SERVICE');
    if (!limit) limit = 0;
    if (!query) query = {};
    return this.rqManager.getv2(
      'parametro',
      null,
      query,
      null,
      null,
      null,
      limit,
    );
  }

  /**
   * getScreenSize
   * capturar el tamaño de pantalla y el tamaño de bootstrap
   * @returns  <Observable> data of the screen size
   */

  public getScreenSize() {
    return this.behavior.asObservable();
  }

  private catchSize(width: any) {
    switch (true) {
      case width < 576:
        return 'xs';
      case width >= 576 && width < 768:
        return 'sm';
      case width >= 768 && width < 992:
        return 'md';
      case width >= 992 && width < 1200:
        return 'lg';
      case width >= 1200:
        return 'xl';
    }
  }

  /**
   * get Modalidades de seleccion
   * If the response has errors in the OAS API it should show a popup message with an error.
   * If the response suceed, it returns the data of the object.
   * @returns  <Observable> data of the object registered at the DB. undefined if the request has errors
   */
  public getModalidadesDeSeleccion() {
    this.rqManager.setPath('ADMINISTRATIVA_SERVICE');
    const query_params = {
      query: '?limit=-1&sortby=NumeroOrden&order=asc',
    };
    return this.rqManager.get('modalidad_seleccion/' + query_params.query);
  }
  /**
   * If para Datos del Store
   * Si el elemento es null o es { type: '[Store] Action' } regresa false
   * Si el elemento es diferente de lo anterior regresa true
   * @returns  Boolean Informacion si existe el elemento o no
   */
  public IfStore(data: any) {
    if (data) {
      if (Object.keys(data)[0] !== 'type') {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  BuscarNodo(arbol: any, codigo: string) {
    for (const element of arbol) {
      if (codigo.indexOf(element.Codigo) !== -1) {
        if (element.Codigo === codigo) {
          return element;
        } else {
          if (element.children) {
            return this.BuscarNodo(element.children, codigo);
          }
        }
      }
    }
  }

  ConvertirFecha(fecha: any) {
    if (fecha) {
      const datos: any = fecha.toISOString().split('T');
      datos[1] = datos[1].split('Z')[0];
      return `${datos[0]} ${datos[1]} +0000 +0000`;
    } else {
      return null;
    }
  }
}
