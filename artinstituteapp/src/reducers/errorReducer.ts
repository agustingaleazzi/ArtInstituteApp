import {GET_ERROR} from '../actions/actions';
import { error } from '../interfaces/interfaces';

interface Action {
    type: string,
    payload: any
  }

const initialState = [] as any;

const errorReducer = (state = initialState, action:Action)  => {
    let payload = {} as error;
    payload = action.payload
    switch (action.type) {
      case GET_ERROR:
        return state.push(payload)
      default:
        return state
    }
  }

  export default errorReducer;