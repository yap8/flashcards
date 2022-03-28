import { combineReducers } from 'redux'
import formReducer from './formReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  user: userReducer,
  form: formReducer
})

export default rootReducer
