import { LOGIN_USER } from "../actions/actions"

const initialState = {
    userId: '',
    userMail: '',
    userName: 'ninguno'
}

const userReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case LOGIN_USER:
        return action.payload
      default:
        return state
    }
  }

export default userReducer;