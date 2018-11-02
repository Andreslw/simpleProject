export const GUARDA_USUARIO = "GUARDA_USUARIO"
export const USUARIOS = "USUARIOS"
export const CARGA_USUARIOS_LOCAL_STORAGE = "CARGA_USUARIOS_LOCAL_STORAGE"

export function guardaUsuario(values){
  values.id = Date.now() + Math.floor(Math.random()*100 )
  let usuarios = localStorage.getItem('usuarios')
  if(!usuarios) {
    usuarios = {}
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
  }else{
    usuarios = JSON.parse(usuarios)
  }
  usuarios[values.id] = values
  localStorage.setItem('usuarios', JSON.stringify(usuarios))

  return {
    type: GUARDA_USUARIO,
    datos: values
  }
}

export function cargaUsuarios(usuarios){
  return {
    type: CARGA_USUARIOS_LOCAL_STORAGE,
    datos: usuarios
  }
}
