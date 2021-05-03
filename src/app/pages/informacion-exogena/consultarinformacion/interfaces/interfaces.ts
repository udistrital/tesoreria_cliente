export const CONFIGURACION_TABLACERTIFICADO: any = {
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'fechaInicial',
            title: {
                name: 'Fecha Inicial',
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
            key: 'fechaFinal',
            title: {
                name: 'Fecha Final',
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
            key: 'fechaExpedicion',
            title: {
                name: 'Fecha de Expedición',
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
            key: 'departamento',
            title: {
                name: 'Departamento de Retención',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'municipio',
            title: {
                name: 'Municipio de Retención',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
        {
            key: 'numeroEntidades',
            title: {
                name: 'No. de Entidades',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
    ],
};
export const DATOS_TABLACERTIFICADO: any = [
    {
        fechaInicial: '2020-05-01T23:00:00Z',
        fechaFinal: '2020-06-30T23:00:00Z',
        fechaExpedicion: '2020-06-30T23:00:00Z',
        departamento: '',
        municipio: '',
        numeroEntidades: '1',
    },
    {
        fechaInicial: '2020-06-01T23:00:00Z',
        fechaFinal: '2020-07-30T23:00:00Z',
        fechaExpedicion: '2020-07-30T23:00:00Z',
        departamento: '',
        municipio: '',
        numeroEntidades: '2',
    },
];
