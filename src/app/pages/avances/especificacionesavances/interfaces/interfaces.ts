export const CONFIGURACION_TABLA: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'codigo',
            title: {
                name: 'Código',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'nombre',
            title: {
                name: 'Nombre de Tipo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'descripcion',
            title: {
                name: 'Descripción de Tipo',
                class: 'text-center',
            },
            pipe: {
                class: 'text-center',
            }
        },
        {
            key: 'estado',
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
                name: 'modificar',
                icon: 'fas fa-pencil-alt',
                class: 'p-1',
                title: 'Modificar',
            },
            {
                name: 'cambiarEstado',
                icon: 'fas fa-edit',
                class: 'p-1',
                title: 'Cambiar estado',
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
export const DATOS_TABLA: any = [
    {
        codigo: 'TRANS',
        nombre: 'Transporte',
        descripcion: 'Transporte terrestre',
        estado: 'Activo',
        fecha: '01-13-2021',
    },
    {
        codigo: 'HOSP',
        nombre: 'Hospedaje',
        descripcion: 'Hospedaje en la ciudad 1 día',
        estado: 'Activo',
        fecha: '01-13-2021',
    },
];
