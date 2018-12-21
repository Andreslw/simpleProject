import { GUARDA_USUARIO, ELIMINA_USUARIO } from "../actions";

export default function reducerUsuarios(state = {}, action) {
  switch (action.type) {
    case GUARDA_USUARIO:
      return { ...state, [action.datos.id]: action.datos };
    case ELIMINA_USUARIO:
      let usuarios = { ...state };
      delete usuarios[action.datos];
      return usuarios;
    default:
      return state;
  }
}
