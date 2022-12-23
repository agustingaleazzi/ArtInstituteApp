import { Dispatch } from "redux";
import { getFirstPage } from "../services/obras";

export const AGREGAR_FAVORITO = 'AGREGAR_FAVORITO';
export const QUITAR_FAVORITO = 'QUITAR_FAVORITO';
export const AGREGAR_OBRA = 'AGREGAR_OBRA';
export const INIT_OBRAS = 'INIT_OBRAS';
export const INIT_PAGINA = 'INIT_PAGINA';
export const GET_ERROR = 'GET_ERROR';
export const LOGIN_USER = 'LOGIN_USER';
export const INIT_PAGE = 'INIT_PAGE';
export const GET_PAGE = 'GET_PAGE';



/*funcion para buscar en la api la primera página de obras*/
export function initPage() {
  try {
    return async (dispatch: Dispatch) => {
      const page = await getFirstPage()
      console.log('page' + page)
      dispatch({
        type: INIT_PAGE,
        payload: page
      })
    }
  } catch (e: any) {
    console.log(e.toJSON());
  };
}

export function getPage (url:any) {
  try {
      return async (dispatch: Dispatch) => {
          const page = await getPage(url)
          console.log('page' + page)
            dispatch({
                type: INIT_PAGE,
                payload: page
              })            
        }
  } catch(e:any){
          console.log(e.toJSON());
    };
}

/*funcion para agregar a favoritos una obra */
export const agregarFavoritos = (obra: any) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: AGREGAR_FAVORITO,
      payload: obra
    })
  }
}

/*funcion para quitar de favoritos una obra*/
export const quitarFavoritos = (obra: any) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: QUITAR_FAVORITO,
      payload: obra
    })
  }
}
