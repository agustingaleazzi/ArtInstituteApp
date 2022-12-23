import { combineReducers } from "redux";
import userReducer from "./userReducer";
import obrasReducer from "./obrasReducer";
import errorReducer from "./errorReducer";
import obrasFavReducer from "./obrasFavReducer"
import { AGREGAR_FAVORITO, QUITAR_FAVORITO} from '../actions/actions';



interface obra {
  id: number
}

interface error {
  idError: number,
  idDescripcion: string
}

const initialState = [] as any;

const obrasApp = combineReducers({
  obrasFav: obrasFavReducer,
  obras: obrasReducer,
  errores: errorReducer,
  user: userReducer
})

export default obrasApp;