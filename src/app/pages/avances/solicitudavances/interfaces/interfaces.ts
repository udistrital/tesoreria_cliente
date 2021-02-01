export const CONFIGURACION_TABLASOLICITUD: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'areaFuncional',
            title: {
                name: 'Área Funcional',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'numeroSolicitud',
            title: {
                name: 'Número de Solicitud',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'estadoSolicitud',
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
                name: 'modificarSolicitud',
                icon: 'fas fa-edit',
                class: 'p-1',
                title: 'Editar Tipo de Avance',
            },
            {
                name: 'borrarSolicitud',
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
    sort: true,
    filter: true,
};
export const DATOS_TABLASOLICITUD: any = [
    {
        areaFuncional: '01',
        numeroSolicitud: '001',
        estadoSolicitud: 'Elaborado',
        fecha: '2021-20-11T02:18:54Z',
    },
    {
        areaFuncional: '01',
        numeroSolicitud: '002',
        estadoSolicitud: 'Elaborado',
        fecha: '2021-02-10T02:18:54Z',
    },
];
