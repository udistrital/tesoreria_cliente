export const CONFIGURACION_TABLA_SOLICITUDES_PAGO: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'Id',
            title: {
                name: 'Consecutivo',
                class: 'text-center text-nowrap',
            },
            pipe: {
                class: 'text-center text-nowrap',
            }
        },
        {
            key: 'TipoID',
            title: {
                name: 'Tipo ID',
                class: 'text-center text-nowrap',
            },
            pipe: {
                class: 'text-center text-nowrap',
            }
        },
        {
            key: 'NumeroID',
            title: {
                name: 'Numero ID',
                class: 'text-center text-nowrap',
            },
            pipe: {
                class: 'text-center text-nowrap',
            }
        },
        {
            key: 'Nombres',
            title: {
                name: 'Nombre',
                class: 'text-center text-nowrap',
            },
            pipe: {
                class: 'text-center text-nowrap',
            }
        },
        {
            key: 'Detalle',
            title: {
                name: 'Estado',
                class: 'text-center text-nowrap',
            },
            pipe: {
                class: 'text-center text-nowrap',
            }
        },
        {
            key: 'Estado',
            title: {
                name: 'Estado',
                class: 'text-center text-nowrap',
            },
            pipe: {
                class: 'text-center text-nowrap',
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
                icon: 'fas fa-list',
                class: 'p-2',
                title: 'Editar',
            },
        ],
    },
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    sort: true,
    filter: true,
};

export const DATOS_SOLICITUDES_PAGO = [
    {
        Id: 1,
        TipoID: 'CC',
        NumeroID: '1018463814',
        Codigo: '20111005011',
        Nombres: 'Jhoan Manuel',
        Apellidos: 'Murillo Yara',
        Detalle: 'Reactivacion de Pago por monitoria no reclamada',
        Estado: 'Pendiente',
        Archivos: [
            {
                name: 'Cedula.pdf'
            },
            {
                name: 'Soporte1.pdf'
            }
        ],
    },
    {
        Id: 2,
        TipoID: 'CC',
        NumeroID: '1018463814',
        Codigo: '20111005011',
        Nombres: 'Jhoan Manuel',
        Apellidos: 'Murillo Yara',
        Detalle: 'Reactivacion de Pago por monitoria no reclamada',
        Estado: 'Pendiente',
        Archivos: [
            {
                name: 'Cedula.pdf'
            },
            {
                name: 'Soporte1.pdf'
            }
        ],
    },
    {
        Id: 3,
        TipoID: 'CC',
        NumeroID: '1018463814',
        Codigo: '20111005011',
        Nombres: 'Jhoan Manuel',
        Apellidos: 'Murillo Yara',
        Detalle: 'Reactivacion de Pago por monitoria no reclamada',
        Estado: 'Pendiente',
        Archivos: [
            {
                name: 'Cedula.pdf'
            },
            {
                name: 'Soporte1.pdf'
            }
        ],
    },
    {
        Id: 4,
        TipoID: 'CC',
        NumeroID: '1018463814',
        Codigo: '20111005011',
        Nombres: 'Jhoan Manuel',
        Apellidos: 'Murillo Yara',
        Detalle: 'Reactivacion de Pago por monitoria no reclamada',
        Estado: 'Pendiente',
        Archivos: [
            {
                name: 'Cedula.pdf'
            },
            {
                name: 'Soporte1.pdf'
            }
        ],
    }
];

export const CONFIGURACION_TABLA_CONSULTA_ORDENES_PAGO: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'Vigencia',
            title: {
                name: 'Vigencia',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'UnidadEjecutora',
            title: {
                name: 'Unidad Ejecutora',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center text-nowrap',
            }
        },
        {
            key: 'NumeroOP',
            title: {
                name: 'N° Orden de Pago',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center text-nowrap',
            }
        },
        {
            key: 'TipoID',
            title: {
                name: 'Tipo ID',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center text-nowrap',
            }
        },
        {
            key: 'NumeroID',
            title: {
                name: 'Numero ID',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center text-nowrap',
            }
        },
        {
            key: 'Nombre',
            title: {
                name: 'Nombre Benefifiario',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center text-nowrap',
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
                icon: 'fas fa-list',
                class: 'p-2',
                title: 'Editar Ordenes de Pago',
            },
        ],
    },
    noData: {
        name: 'No Existen Elementos Asociados',
        class: 'text-center',
    },
    sort: true,
    filter: true,
};

export const DATOS_CONSULTA_ORDENES_PAGO = [
    {
        Vigencia: '2020',
        UnidadEjecutora: '1',
        NumeroOP: '12345',
        TipoID: 'CC',
        NumeroID: '1018463814',
        Nombre: 'Jhoan Manuel Murillo'
    },
    {
        Vigencia: '2020',
        UnidadEjecutora: '1',
        NumeroOP: '12345',
        TipoID: 'CC',
        NumeroID: '1018463814',
        Nombre: 'Jhoan Manuel Murillo'
    },
    {
        Vigencia: '2020',
        UnidadEjecutora: '1',
        NumeroOP: '12345',
        TipoID: 'CC',
        NumeroID: '1018463814',
        Nombre: 'Jhoan Manuel Murillo'
    },
    {
        Vigencia: '2020',
        UnidadEjecutora: '1',
        NumeroOP: '12345',
        TipoID: 'CC',
        NumeroID: '1018463814',
        Nombre: 'Jhoan Manuel Murillo'
    }
];
