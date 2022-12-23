import {GET_PAGE, INIT_PAGE } from '../actions/actions';

interface Action {
    type: string,
    payload: any
  }

const initialState = [] as any;

/*reducer que recibe las acciones y define nuevo estado de las obras*/
const obrasReducer = (state = initialState, action:Action) => {
    switch (action.type) {
      case INIT_PAGE:
        return action.payload
        case GET_PAGE:
        return action.payload
      default:
        return state
    }
  }

  export default obrasReducer;