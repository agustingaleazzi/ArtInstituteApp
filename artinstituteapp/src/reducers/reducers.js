import { combineReducers } from "redux";
import { AGREGAR_FAVORITO, GET_ERROR, QUITAR_FAVORITO, AGREGAR_OBRA, INIT_OBRAS } from '../actions/actions';

/*reducer que recibe las acciones y define nuevo estado de las obras*/
const obrasReducer = (state = [], action) => {
  switch (action.type) {
    case INIT_OBRAS:
      return action.payload
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

const errorReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ERROR:
      return state.push(action.payload)
    default:
      return state
  }
}

const obrasApp = combineReducers({
  obrasFav: obrasFavReducer,
  obras: obrasReducer,
  errores: errorReducer
})

export default obrasApp;