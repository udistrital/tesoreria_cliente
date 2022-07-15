/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {
  production: true,
  NUXEO: {

    PATH: 'https://documental.portaloas.udistrital.edu.co/nuxeo/',
    CREDENTIALS: {
      USERNAME: 'desarrollooas',
      PASS: 'desarrollooas2019',
    },
  },
  AVANCES_CRUD: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/avances_crud/v1/',
  PARAMETROS_CRUD_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/parametros/',
  PLAN_CUENTAS_MONGO_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/plan_cuentas_mongo_crud/v1/',
  ADMINISTRATIVA_AMAZON_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/administrativa_amazon_api/v1/',
  OIKOS_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/oikos_crud_api/v2/',
  TERCEROS_CRUD_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/terceros_crud/v1/',
  TESORERIA_MID_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/tesoreria_mid/v1/',
  // AVANCES_CRUD: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/avances_crud/v1/',
  // PARAMETROS_CRUD_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/parametros/',

  CLIENTE_PRESUPUESTO: '/pages/plan-cuentas',
  CLIENTE_CONTABILIDAD: 'https://pruebascontabilidad.portaloas.udistrital.edu.co/pages',
  WSO2_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/',
  NECESIDADES: 'https://pruebasnecesidades.portaloas.udistrital.edu.co/',
  NECESIDADES_CRUD_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/necesidades_crud/v1/',
  ADMINISTRATIVA_PRUEBAS_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/administrativa_amazon_api/v1/',
  // PLAN_CUENTAS_MONGO_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/plan_cuentas_mongo_crud/v1/',
  PLAN_CUENTAS_MID_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/plan_cuentas_mid/v1/',
  MOVIMIENTOS_CRUD_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/movimientos_crud/v1/',
  ADMINISTRATIVA_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/necesidades_crud/v1/',
  // OIKOS_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/oikos_crud_api/v2/',
  CONFIGURACION_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/configuracion_crud_api/v1/',
  CORE_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/core_api/v1/',
  CORE_AMAZON_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/core_amazon_crud/v1/',
  NOTIFICACION_SERVICE: 'wss://autenticacion.portaloas.udistrital.edu.co/apioas/notificacion_ws/v1/',
  CONF_MENU_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/configuracion_crud_api/v1/menu_opcion_padre/ArbolMenus/',
  DOCUMENTO_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/documento_crud/v2/',
  GIROS_CRUD_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/giros_crud/v1/',
  CUENTAS_CONTABLES_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/cuentas_contables_crud/v1/',
  KNOWAGE: {
    PROTOCOL: 'https',
    HOST: 'tuleap.udistrital.edu.co',
    PORT: '',
    CONTEXTPATH: 'knowage',
    USER: 'bidev',
    PASSWORD: 'bidev',
},
  TOKEN: {
    AUTORIZATION_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize',
    CLIENTE_ID: 'xsCo1iC2gxLYFl8RVEZqZl4ST2oa',
    RESPONSE_TYPE: 'id_token token',
    SCOPE: 'openid email role',
    REDIRECT_URL: 'https://pruebastesoreria.portaloas.udistrital.edu.co',
    SIGN_OUT_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oidc/logout',
    SIGN_OUT_REDIRECT_URL: 'https://pruebastesoreria.portaloas.udistrital.edu.co',
  },

};
