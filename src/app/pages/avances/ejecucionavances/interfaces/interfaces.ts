export const DATOS_EJECUCION: any = [
    {
        mes: 'abril',
        valorGirado: 65747,
        porcentajeGirado: 13453,
        valorLegalizado: 89045,
        porcentajeLegalizado: 723847,
        valorLegalizar: 86345,
        porcentajeLegalizar: 71231,
        totalAvances: 459243
    }
];
export const CONFIGURACION_TABLA: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'numeroOrdenPago',
            title: {
                name: 'N° orden de pago',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'titular',
            title: {
                name: 'Titular',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'cedula',
            title: {
                name: 'Cédula',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'facultad',
            title: {
                name: 'Facultad',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'valorBruto',
            title: {
                name: 'Valor bruto',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'fechaGiro',
            title: {
                name: 'Fecha de giro',
                class: 'text-center',
            },
            pipe: {
                type: 'date',
                config: [
                    'shortDate'
                ],
                class: 'text-center',
            }
        },
        {
            key: 'plazoLegalizar',
            title: {
                name: 'Plazo para legalizar',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'fechaLegalizacion',
            title: {
                name: 'Fecha de legalización',
                class: 'text-center',
            },
            pipe: {
                type: 'date',
                config: [
                    'shortDate'
                ],
                class: 'text-center',
            }
        },
        {
            key: 'retraso',
            title: {
                name: 'Retraso (días)',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'numeroRetrasos',
            title: {
                name: 'N° de retrasos',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
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
                title: 'Ver avances',
            }
        ],
    },
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    endSubtotal: false,
    sort: true,
    filter: false,
};
export const DATOS_TABLA: any = [
    {
        numeroOrdenPago: 84320834,
        titular: 'Ana Miranda',
        cedula: 123456,
        facultad: 'Ingeniería',
        valorBruto: 213345,
        fechaGiro: '01-03-2020',
        plazoLegalizar: 60,
        fechaLegalizacion: '01-04-2020',
        retraso: 23,
        numeroRetrasos: 1
    },
    {
        numeroOrdenPago: 389573,
        titular: 'Miguel Arias',
        cedula: 654321,
        facultad: 'Ciencias',
        valorBruto: 4563432,
        fechaGiro: '01-08-2020',
        plazoLegalizar: 20,
        fechaLegalizacion: '01-07-2020',
        retraso: 54,
        numeroRetrasos: 2
    },
];
export const CONFIGURACION_EJECUCION: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'indicadorPuntualidad',
            title: {
                name: 'Indicador de puntualidad',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'actaReintegro',
            title: {
                name: 'Acta de reintegro',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'estado',
            title: {
                name: 'Estado',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'valorLegalizado',
            title: {
                name: 'Valor legalizado',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'fechaEvento',
            title: {
                name: 'Fecha del evento',
                class: 'text-center',
            },
            pipe: {
                type: 'date',
                config: [
                    'shortDate'
                ],
                class: 'text-center',
            }
        },
        {
            key: 'objetivo',
            title: {
                name: 'Objetivo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'conceptoGeneral',
            title: {
                name: 'Concepto general',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'codigoRubro',
            title: {
                name: 'Código de rubro',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'rubro',
            title: {
                name: 'Rubro',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'codigoFuente',
            title: {
                name: 'Código de fuente',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'nombreFuente',
            title: {
                name: 'Nombre de fuente',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'correoContacto',
            title: {
                name: 'Correo de contacto',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'telefonoContacto',
            title: {
                name: 'Teléfono de contacto',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
    ],
    noData: {
        name: 'No existen elementos asociados',
        class: 'text-center',
    },
    endSubtotal: false,
    sort: true,
};
export const DATOS_MODAL: any = [
    {
        indicadorPuntualidad: 8,
        actaReintegro: 3,
        estado: 'Activo',
        valorLegalizado: 39475201,
        fechaEvento: '02-04-2020',
        objetivo: 'Salida',
        conceptoGeneral: 123,
        codigoRubro: 123,
        rubro: 23,
        codigoFuente: 1,
        nombreFuente: 'saldo',
        correoContacto: 'correo@correo.com',
        telefonoContacto: 1923712,
    }
];
export const DATOS_PRACTICAS: any = [
    {
        nombre: 'Artes',
        codigo: 14,
        valorAsignado: 1289371,
    }
];
