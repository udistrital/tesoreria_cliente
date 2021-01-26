export const CONFIGURACION_TABLATIPOS: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'codigoAbreviado',
            title: {
                name: 'Código',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'nombreTipo',
            title: {
                name: 'Nombre de Tipo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'descripcionTipo',
                title: {
                name: 'Descripción de Tipo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'estadoTipo',
            title: {
                name: 'Estado',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'fecha',
            title: {
                name: 'Fecha',
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
    ],
    rowActions: {
        title: {
            name: 'Acciones',
            class: 'text-center',
            actionClass: 'd-flex flex-row justify-content-around align-middle'
        },
        actions: [
            {
                name: 'verDetalle',
                icon: 'fas fa-info-circle',
                class: 'p-1',
                title: 'Detalle',
            },
            {
                name: 'asosiarRequisitos',
                icon: 'fas fa-list',
                class: 'p-1',
                title: 'Asociar Requisitos',
            },
            {
                name: 'modificarTipo',
                icon: 'fas fa-edit',
                class: 'p-1',
                title: 'Modificar Tipo de Avance',
            },
            {
                name: 'borrarTipo',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'Borrar Tipo de Avance',
            },
        ],
    },
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    endSubtotal: false,
    sort: true,
    filter: true,
};
export const DATOS_TABLATIPOS: any = [
    {
        codigoAbreviado: 'CTAT',
        nombreTipo: 'Compra de Tiquetes Aéreos y Terrestres',
        descripcionTipo: 'Descripción... (Resolución N° 652 de 2015)',
        estadoTipo: 'Activo',
        fecha: '2021-20-11T02:18:54Z',
    },
    {
        codigoAbreviado: 'VT',
        nombreTipo: 'Viáticos',
        descripcionTipo: 'Descripción...',
        estadoTipo: 'Inactivo',
        fecha: '2021-02-10T02:18:54Z',
    },
];

export const CONFIGURACION_REQUISITOS: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'codigoAbreviado',
            title: {
                name: 'Código',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'nombreRequisito',
            title: {
                name: 'Nombre de Tipo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'descripcionR',
            title: {
                name: 'Descripción de Tipo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'fecha',
            title: {
                name: 'Fecha',
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
    ],
    rowActions: {
        title: {
            name: 'Acciones',
            class: 'text-center',
            actionClass: 'd-flex flex-row justify-content-around align-middle'
        },
        actions: [
            {
                name: 'borrarTipo',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'Borrar Tipo de Avance',
            },
        ],
    },
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    endSubtotal: false,
    sort: true,
    filter: false,
};
export const DATOS_REQUISITOS: any = [
    {
        codigoAbreviado: 'CTAT',
        nombreTipo: 'Compra de Tiquetes Aéreos y Terrestres',
        descripcionTipo: 'Descripción... (Resolución N° 652 de 2015)',
        estadoTipo: 'Activo',
        fecha: '2021-20-11T02:18:54Z',
    },
    {
        codigoAbreviado: 'VT',
        nombreTipo: 'Viáticos',
        descripcionTipo: 'Descripción...',
        estadoTipo: 'Inactivo',
        fecha: '2021-02-10T02:18:54Z',
    },
];
