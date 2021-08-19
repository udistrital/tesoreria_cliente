// VER src/evironments/README.md PARA MAS INFORMACIÓN PARA ESTE ARCHIVO

const { writeFile } = require('fs');
// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.ts';
// Load node modules
const colors = require('colors');
require('dotenv').config();
// `environment.ts` file structure
// COLOCAR LAS VARIABLES OBLIGATORIAS
if (!(
    process.env.NUXEO_USER 
    && process.env.NUXEO_PASS
    && process.env.KNOWAGE_USER
    && process.env.KNOWAGE_PASS
    && process.env.TOKEN_CLIENT_ID
)) {
    console.error('All the required environment variables were not provided!');
    process.exit(-1);
}
const envConfigFile 
= `// ESTE ARCHIVO SE GENERA AUTOMATICAMENTE
// LOS CAMBIOS REALIZADOS A ESTE ARCHIVO SERÁN SOBREESCRITOS
// VER README.md PARA MAS INFORMACIÓN.

export const environment = {

   production: false,
   NUXEO: {

       PATH: 'https://documental.portaloas.udistrital.edu.co/nuxeo/',
       CREDENTIALS: {
         USERNAME: '${process.env.NUXEO_USER}',
         PASS: '${process.env.NUXEO_PASS}',
        // USERNAME: process.env.NUXEO_USER,
        // PASS: process.env.NUXEO_PASS,
       },
     },
   CLIENTE_PRESUPUESTO: '/pages/plan-cuentas',
   CLIENTE_CONTABILIDAD: 'https://pruebascontabilidad.portaloas.udistrital.edu.co/pages',
   WSO2_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/',
   PLAN_ADQUISICION_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/bodega_jbpm/v1/',
   //  ADMINISTRATIVA_PRUEBAS_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/administrativa_amazon_api/v1/',
   // ADMINISTRATIVA_PRUEBAS_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8104/v1/',
   // PLAN_CUENTAS_MONGO_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8203/v1/',
   // PLAN_CUENTAS_MONGO_SERVICE: 'http://localhost:8082/v1/',
   PLAN_CUENTAS_MID_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/plan_cuentas_mid/v1/',
   // PLAN_CUENTAS_MID_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8204/v1/',
   // PLAN_CUENTAS_MID_SERVICE: 'http://localhost:8084/v1/',
   ADMINISTRATIVA_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/administrativa_crud_api/v1/',
   // ADMINISTRATIVA_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8090/v1/',
   // ADMINISTRATIVA_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8201/v1/',
   ADMINISTRATIVA_JBPM_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/administrativa_jbpm/v1/',
   NECESIDADES_CRUD_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/necesidades_crud/v1/',
   NECESIDADES: 'https://pruebasnecesidades.portaloas.udistrital.edu.co/',
   // NECESIDADES_CRUD_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8201/v1/',
   MOVIMIENTOS_CRUD_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/movimientos_crud/v1/',
   // MOVIMIENTOS_CRUD_SERVICE: 'http://localhost:8085/v1/',
   // MOVIMIENTOS_CRUD_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8202/v1/',
   // MOVIMIENTOS_CRUD_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/movimientos_crud/v1/',
   CORE_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/core_api/v1/',
   // CORE_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8092/v1/',
   CORE_AMAZON_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/core_amazon_crud/v1/',
   CONFIGURACION_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/configuracion_crud_api/v1/',
   CONF_MENU_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/configuracion_crud_api/v1/menu_opcion_padre/ArbolMenus/',
   DOCUMENTO_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/documento_crud/v2/',
   KNOWAGE: {
       PROTOCOL: 'https',
       HOST: 'tuleap.udistrital.edu.co',
       PORT: '',
       CONTEXTPATH: 'knowage',
       USER: '${process.env.KNOWAGE_USER}',
       PASSWORD: '${process.env.KNOWAGE_PASS}',
   },
   TOKEN: {
       AUTORIZATION_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize',
       CLIENTE_ID: '${process.env.TOKEN_CLIENT_ID}',
       // CLIENTE_ID: 'xsCo1iC2gxLYFl8RVEZqZl4ST2oa',
       RESPONSE_TYPE: 'id_token token',
       SCOPE: 'openid email role',
       REDIRECT_URL: '${process.env.TOKEN_REDIRECT_URL || 'http://localhost:4200/'}',
       SIGN_OUT_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oidc/logout',
       SIGN_OUT_REDIRECT_URL: '${process.env.TOKEN_SIGN_OUT_REDIRECT_URL || 'http://localhost:4200/'}',
   },
   // ----------------------------------------------------------------------------------
   AVANCES_CRUD: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/avances_crud/v1/',
   PARAMETROS_CRUD_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/parametros/',
   PLAN_CUENTAS_MONGO_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/plan_cuentas_mongo_crud/v1/',
   ADMINISTRATIVA_AMAZON_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/administrativa_amazon_api/v1/',
   OIKOS_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/oikos_crud_api/v2/',
   TERCEROS_CRUD_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/terceros_crud/v1/',
   TESORERIA_MID_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/apioas/tesoreria_mid/v1/',
   // TESORERIA_MID_SERVICE: 'http://localhost:8081/v1/',
// -----------------------------------------------------------------------------------

};

`;

// console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
// console.log(colors.grey(envConfigFile));
writeFile(targetPath, envConfigFile, function (err) {
   if (err) {
       throw console.error(err);
   } else {
       console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
   }
});
