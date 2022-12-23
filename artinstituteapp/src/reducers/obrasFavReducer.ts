import { AGREGAR_FAVORITO, QUITAR_FAVORITO} from '../actions/actions';
import { obra } from '../interfaces/interfaces';

interface Action {
    type: string,
    payload: obra
  }
  
const initialState = [] as any;
  
/*reducer que recibe las acciones y define nuevo estado de las obras favoritas*/
const obrasFavReducer = (state = initialState, action:Action) => {
  switch (action.type) {
    case AGREGAR_FAVORITO:
      return state.concat(action.payload)
    case QUITAR_FAVORITO:
      return state.filter((obra:obra) => obra['id'] !== action.payload.id)
    default:
      return state
  }
}

export default obrasFavReducer;