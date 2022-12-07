import { combineReducers } from "redux";
import { getAllObras } from "../services/obras";
import { AGREGAR_MG, QUITAR_MG, AGREGAR_OBRA, INIT_OBRAS } from '../actions/actions'

export const initObras = () => {
  return async (dispatch) => {
    const obras = await getAllObras();
    dispatch({
      type: INIT_OBRAS,
      payload: obras
    })
  }
}

const obrasReducer = (state = [], action) => {
  console.log("accion" + action.type)
  switch (action.type) {
    case INIT_OBRAS:
      return [action.payload]
    case AGREGAR_OBRA:
      return Object.assign({}, state, state.concat(action.obra)
      )
    default:
      return state
  }
}

const obrasFavReducer = (state = [], action) => {
  switch (action.type) {
    case AGREGAR_MG:
      return Object.assign({}, state, state.concat(action.obra)
      )
    default:
      return state
  }
}



const obrasApp = combineReducers({
  obrasFav: obrasFavReducer,
  obras: obrasReducer
})

export default obrasApp;