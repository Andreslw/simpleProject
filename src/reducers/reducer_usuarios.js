import { GUARDA_USUARIO, CARGA_USUARIOS_LOCAL_STORAGE } from '../actions'

export default function reducerUsuarios(state = {}, action){
  switch (action.type) {
    case GUARDA_USUARIO:
      return { ...state, [action.datos.id]: action.datos }
    case CARGA_USUARIOS_LOCAL_STORAGE:
      return action.datos
    default:
      return state
  }
}
