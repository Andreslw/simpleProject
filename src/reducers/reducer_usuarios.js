import { GUARDA_USUARIO } from "../actions";

export default function reducerUsuarios(state = {}, action) {
  switch (action.type) {
    case GUARDA_USUARIO:
      return { ...state, [action.datos.id]: action.datos };
    default:
      return state;
  }
}
