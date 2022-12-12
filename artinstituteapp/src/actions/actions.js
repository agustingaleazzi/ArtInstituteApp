import { AxiosError } from "axios";
import { getAllObras } from "../services/obras";

export const AGREGAR_FAVORITO = 'AGREGAR_FAVORITO';
export const QUITAR_FAVORITO = 'QUITAR_FAVORITO';
export const AGREGAR_OBRA = 'AGREGAR_OBRA';
export const INIT_OBRAS = 'INIT_OBRAS';
export const INIT_PAGINA = 'INIT_PAGINA';
export const GET_ERROR = 'GET_ERROR';

/*funcion para buscar en la api la primera página de obras*/
export const initObras = () => {
    try {
        return async (dispatch) => {
            const obras = await getAllObras()

              dispatch({
                  type: INIT_OBRAS,
                  payload: obras
                })            
          }
    } catch(e){
            console.log(e.toJSON());
      };
  }

  /*funcion para agregar a favoritos una obra */
export const agregarFavoritos = (obra) => {
    return (dispatch) => {
      dispatch({
        type: AGREGAR_FAVORITO,
        payload: obra
      })
    }
  }
  
  /*funcion para quitar de favoritos una obra*/
  export const quitarFavoritos = (obra) => {
    return (dispatch) => {
      dispatch({
        type: QUITAR_FAVORITO,
        payload: obra
      })
    }
  }
