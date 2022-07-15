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

  CLIENTE_PRESUPUESTO: '/pages/plan-cuentas',
  CLIENTE_CONTABILIDAD: 'https://pruebascontabilidad.portaloas.udistrital.edu.co/pages',
  WSO2_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/',
  PLAN_CUENTAS_CRUD_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/plan_cuentas_crud/v1/',
  PLAN_CUENTAS_MID_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/plan_cuentas_mid/v1/',
  PLAN_CUENTAS_MONGO_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/plan_cuentas_mongo_crud/v1/',
  TESORERIA_MID_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/tesoreria_mid/v1/',
  CONFIGURACION_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/configuracion_crud_api/v1/',
  NOTIFICACION_SERVICE: 'wss://autenticacion.portaloas.udistrital.edu.co/apioas/notificacion_ws/v1/',
  CORE_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8092/v1/',
  CORE_AMAZON_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/core_amazon_crud/v1/',
  CONF_MENU_SERVICE:
    'https://autenticacion.portaloas.udistrital.edu.co/apioas/configuracion_crud_api/v1/menu_opcion_padre/ArbolMenus/',
  DOCUMENTO_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/documento_crud/v2/',
  TERCEROS_CRUD_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/terceros_crud/v1/',
  GIROS_CRUD_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/giros_crud/v1/',
  CUENTAS_CONTABLES_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/cuentas_contables_crud/v1/',
  TOKEN: {
    AUTORIZATION_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize',
    CLIENTE_ID: 'FYJx7yXf8fPkejYJl1Fku0hQQkAa',
    RESPONSE_TYPE: 'id_token token',
    SCOPE: 'openid email role',
    // REDIRECT_URL: 'http://10.20.0.254/presupuesto_cliente/',
    // SIGN_OUT_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oidc/logout',
    // SIGN_OUT_REDIRECT_URL: 'http://10.20.0.254/presupuesto_cliente/',
    REDIRECT_URL: 'https://tesoreria.portaloas.udistrital.edu.co',
    SIGN_OUT_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oidc/logout',
    SIGN_OUT_REDIRECT_URL: 'https://tesoreria.portaloas.udistrital.edu.co',
  },

};
