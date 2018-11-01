import _ from 'lodash'

export const GUARDA_USUARIO = "GUARDA_USUARIO"
export const USUARIOS = "USUARIOS"

export function guardaUsuario(values){
  values.id = _.uniqueId()

  return {
    type: GUARDA_USUARIO,
    datos: values
  }
}
