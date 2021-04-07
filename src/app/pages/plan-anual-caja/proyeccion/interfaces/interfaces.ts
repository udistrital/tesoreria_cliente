export const CONFIGURACION_TABLA_SOLICITUDES_PAC: any = {
    title: {
        name: 'Lista de Solicitudes',
        class: 'text-center text-light',
    },
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'Id',
            title: {
                name: 'Consecutivo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'Descripcion',
            title: {
                name: 'Descripcion',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'Vigencia',
            title: {
                name: 'Vigencia',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'FechaCreacion',
            title: {
                name: 'Fecha de Creación',
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
            key: 'FechaModificacion',
            title: {
                name: 'Ultima Modificación',
                class: 'text-center',
            },
            pipe: {
                type: 'date',
                config: [
                    'shortDate',
                ],
                class: 'text-center',
            }
        },
        {
            key: 'Aprobado',
            title: {
                name: 'Aprobado',
                class: 'text-center',
            },
            pipe: {
                isBoolean: true,
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
                name: 'editar',
                icon: 'fas fa-pencil-alt',
                class: 'p-2',
                title: 'Editar',
            },
            {
                name: 'ver',
                icon: 'fas fa-list',
                class: 'p-2',
                title: 'Ver Proyeccion',
            },
            {
                name: 'tabla',
                icon: 'fas fa-code-branch',
                class: 'p-2',
                title: 'Ver Tabla Proyeccion',
            },
        ],
    },
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    sort: true,
    filter: false,
};

export const DATOS_SOLICITUDES_PAC = [
    {
        Id: 1,
        Descripcion: "aasdas",
        Vigencia: "2020",
        FechaCreacion: "2021-04-07T20:04:07Z",
        FechaModificacion: "2021-04-07T20:04:07Z",
        Aprobado: true,
    },
    {
        Id: 2,
        Descripcion: "aasdas",
        Vigencia: "2020",
        FechaCreacion: "2021-04-07T20:04:07Z",
        FechaModificacion: "2021-04-07T20:04:07Z",
        Aprobado: false,
    },
    {
        Id: 3,
        Descripcion: "aasdas",
        Vigencia: "2020",
        FechaCreacion: "2021-04-07T20:04:07Z",
        FechaModificacion: "2021-04-07T20:04:07Z",
        Aprobado: true,
    }
]