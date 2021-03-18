import { SetDetallegiroComponent } from '../components/set-detallegiro/set-detallegiro.component';
export const CONFIGURACION_GIROCHEQUES: any = {
    showColumnTitle: true,
    // title: {
    //     name: 'Actividades Asociadas',
    //     class: 'text-center text-light',
    // },
    dataConfig: [
        {
            key: 'vigencia',
            title: {
                name: 'Vigencia',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'tipoGiro',
            title: {
                name: 'Tipo de giro',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'centroGestor',
            title: {
                name: 'Centro gestor',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'areaFuncional',
            title: {
                name: 'Área funcional',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'numeroGiro',
            title: {
                name: 'N° giro',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'numeroCuenta',
            title: {
                name: 'N° de OP/RA',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        }
    ],
    rowActions: {
        title: {
            name: 'Acciones',
            class: 'text-center',
            actionClass: 'd-flex flex-row justify-content-around align-middle'
        },
        actions: [
            {
                name: 'ver',
                icon: 'fas fa-eye',
                class: 'p-2',
                title: 'Ver Solicitud',
            },
        ],
    },
    tableActions: [
        {
            name: 'nuevo',
            icon: 'fas fa-plus py-1 px-2',
            class: 'px-2',
            title: 'Crear nuevo giro por cheque',
        }
    ],
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    sort: true,
    filter: true,
};
export const DATOS_GIROCHEQUE: any = [
    {
        vigencia: 2020,
        tipoGiro: 'Relación de autorización de nómina',
        centroGestor: 230,
        areaFuncional: '01',
        numeroGiro: 123234,
        numeroCuenta: 123908,
    },
    {
        vigencia: 2019,
        tipoGiro: 'Pago proveedores',
        centroGestor: 230,
        areaFuncional: '01',
        numeroGiro: 432890,
        numeroCuenta: 89240,
     },
];
export const DATOS_RUBROS: any = [
    {
        numeroRubro: '3.01.001.01.02.05.0001.01',
        nombreRubro: 'Riesgos laborales docentes',
        valor: 17329387,
    },
    {
        numeroRubro: '3.01.001.01.02.05.0001.01',
        nombreRubro: 'ICBF docentes',
        valor: 17329387,
    },
];
export const DATOS_CONTA: any = [
    {
        secuencia: 2,
        tercero: 12313,
        numeroCuenta: 17329387,
        nombreCuenta: 'Occidente',
        detalle: 'Pago corresponsal',
        credito: 219823,
        debito: 0,
    },
    {
        secuencia: 3,
        tercero: 435123,
        numeroCuenta: 3745982,
        nombreCuenta: 'Honorarios',
        detalle: 'Pago corresponsal',
        debito: 219823,
        credito: 0,
    },
];
