export const CONFIGURACION_CUENTASCONTABLES_DEBITO: any = {
    title: {
        name: 'Cuentas Debito', // name title
        class: 'text-center', // bootstrap class
    },
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'Codigo',
            title: {
                name: 'Codigo',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'Nombre',
            title: {
                name: 'Nombre',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
    ],
    endSubtotal: false,
    sort: true,
    filter: false,
};

export const CONFIGURACION_CUENTASCONTABLES_CREDITO: any = {
    title: {
        name: 'Cuentas Credito', // name title
        class: 'text-center', // bootstrap class
    },
    showColumnTitle: true,
    dataConfig: [
        {
            key: 'Codigo',
            title: {
                name: 'Codigo',
                class: 'text-center',
            },
            pipe: {
                class: '',
            }
        },
        {
            key: 'Nombre',
            title: {
                name: 'Nombre',
                class: 'text-center',
            },
            pipe: {
                class: 'text-justify',
            }
        },
    ],
    endSubtotal: false,
    sort: true,
    filter: false,
};

export interface EstructuraArbolRubrosApropiaciones {
    Codigo: string;
    Descripcion?: string;
    ValorInicial: number;
    Hijos?: EstructuraArbolRubrosApropiaciones[];
    Movimientos?: string[];
    Padre?: string;
    UnidadEjecutora: number;
    Estado?: string;
    IsLeaf: boolean;
    expanded?: boolean;
    isHighlighted?: boolean;
    data?: EstructuraArbolRubrosApropiaciones;
    children?: EstructuraArbolRubrosApropiaciones[];
  }
