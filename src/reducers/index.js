import { combineReducers } from 'redux'
import reducerUsuarios from './reducer_usuarios'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers(
  {
    usuarios: reducerUsuarios,
    form: formReducer
  }
)
export default rootReducer
