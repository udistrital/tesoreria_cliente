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

export const CONFIGURACION_ESPECIFICACIONTIPO: any = {
    title: {
        name: 'ESPECIFICACIONES', // name title
        class: 'text-center', // bootstrap class
    },
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'tipoEspecificacion',
            title: {
                name: 'Tipo',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'descripcion',
            title: {
                name: 'Descripción de Especificación',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'valor',
            title: {
                name: 'Valor Solicitado',
                class: 'text-center',
            },
            pipe: {
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
                name: 'modificarEspecificacion',
                icon: 'fas fa-edit',
                class: 'p-1',
                title: 'Modificar Especificación',
            },
            {
                name: 'borrarEspecificacion',
                icon: 'fas fa-trash-alt',
                class: 'p-1',
                title: 'Borrar Especificación',
            },
        ],
    },
    tableActions: [
        {
            name: 'nuevoRegistro',
            icon: 'fas fa-plus py-1 px-2',
            class: 'px-2',
            title: 'Agregar Especificación',
        }
    ],
    sort: true,
    filter: false,
};

export const DATOS_ESPECIFICACIONTIPO: any = [
    {
        tipoEspecificacion: 'Transporte',
        descripcion: 'Transporte terrestre',
        valor: '$ 500.000,00',
    },
    {
        tipoEspecificacion: 'Hospedaje',
        descripcion: 'Hospedaje en la ciudad 1 dia',
        valor: '$ 500.000,00',
    },
];


export const CONFIGURACION_REQUISITOSTIPO: any = {
    title: {
        name: 'REQUISITOS', // name title
        class: 'text-center', // bootstrap class
    },
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
                name: 'Nombre de Requisito',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'adjunto',
            title: {
                name: 'Archivo Adjunto',
                class: 'text-center',
            },
            pipe: {
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
                name: 'adjuntarArchivo',
                icon: 'fas fa-paperclip',
                class: 'p-1',
                title: 'Ajuntar Archivo',
            },
        ],
    },
    sort: true,
    filter: false,
};

export const DATOS_REQUISITOSTIPO: any = [
    {
        codigoAbreviado: 'CINV',
        nombreRequisito: 'Carta de Invitación ',
        adjunto: 'cartainvitacion.pdf'

    },
    {
        codigoAbreviado: 'INS',
        nombreRequisito: 'Inscripción',
        adjunto: 'inscripcion.pdf'
    },
];
