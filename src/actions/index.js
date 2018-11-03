export const GUARDA_USUARIO = "GUARDA_USUARIO";

export function guardaUsuario(values) {
  values.id = Date.now() + Math.floor(Math.random() * 100);

  return {
    type: GUARDA_USUARIO,
    datos: values
  };
}
