export const GUARDA_USUARIO = "GUARDA_USUARIO";
export const ELIMINA_USUARIO = "ELIMINA_USUARIO";

export function guardaUsuario(values) {
  values.id = !values.id
    ? Date.now() + Math.floor(Math.random() * 100)
    : values.id;

  return {
    type: GUARDA_USUARIO,
    datos: values
  };
}
export function eliminaUsuario(usuarioId, history = false) {
  if (history) history.push("/");
  return {
    type: ELIMINA_USUARIO,
    datos: usuarioId
  };
}
