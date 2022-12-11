export const AGREGAR_FAVORITO = 'AGREGAR_FAVORITO';
export const QUITAR_FAVORITO = 'QUITAR_FAVORITO';
export const AGREGAR_OBRA = 'AGREGAR_OBRA';
export const INIT_OBRAS = 'INIT_OBRAS';
export const INIT_PAGINA = 'INIT_PAGINA';

/*export function AGREGAR_MG(obra) {
    return { type: AGREGAR_MG, obra }
}

export function QUITAR_MG(obra) {
    return { type: QUITAR_MG, obra }
}*/

export const agregaObra = obra => { 
    return {
        type: 'AGREGAR_OBRA',
        payload: { obra }
    }
}

