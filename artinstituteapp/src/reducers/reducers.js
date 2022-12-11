import { combineReducers } from "redux";
import { getAllObras } from "../services/obras";
import { AGREGAR_FAVORITO, QUITAR_FAVORITO, AGREGAR_OBRA, INIT_OBRAS } from '../actions/actions';

/*funcion para buscar en la api la primera página de obras*/
export const initObras = () => {
  return async (dispatch) => {
    const obras = await getAllObras();
    dispatch({
      type: INIT_OBRAS,
      payload: obras
    })
  }
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

/*reducer que recibe las acciones y define nuevo estado de las obras*/
const obrasReducer = (state = [], action) => {
  switch (action.type) {
    case INIT_OBRAS:
      return action.payload
    case AGREGAR_OBRA:
      return Object.assign({}, state, state.concat(action.obra))
    default:
      return state
  }
}

/*reducer que recibe las acciones y define nuevo estado de las obras favoritas*/
const obrasFavReducer = (state = [], action) => {
  switch (action.type) {
    case AGREGAR_FAVORITO:
      return state.concat(action.payload)
    case QUITAR_FAVORITO:
      return state.filter(element => element.id !== action.payload.id)
    default:
      return state
  }
}



const obrasApp = combineReducers({
  obrasFav: obrasFavReducer,
  obras: obrasReducer
})

export default obrasApp;