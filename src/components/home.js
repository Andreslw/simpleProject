import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Home extends Component {
  renderUsuarios() {
    const { usuarios } = this.props;

    return Object.keys(usuarios).map(u => {
      return (
        <tr key={usuarios[u].id}>
          <td>{usuarios[u].nombre}</td>
          <td>{usuarios[u].email}</td>
          <td>{usuarios[u].fecha_nacimiento}</td>
          <td>
            <Link
              className="btn btn-primary"
              to={`/usuarios/${usuarios[u].id}`}
            >
              Ver
            </Link>
            <Link
              className="btn btn-warning"
              to={`/usuarios/editar/${usuarios[u].id}`}
            >
              Editar
            </Link>
            <button className="btn btn-danger">Eliminar</button>
          </td>
        </tr>
      );
    });
  }
  render() {
    if (Object.keys(this.props.usuarios).length === 0) {
      return <div>Cargando...</div>;
    }
    return (
      <div>
        <h3>Lista de usuarios registrados</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Fecha de nacimiento</th>
              <th> Ver</th>
            </tr>
          </thead>
          <tbody>{this.renderUsuarios()}</tbody>
        </table>
      </div>
    );
  }
}
function mapStateToProps({ usuarios }) {
  return { usuarios };
}
export default connect(mapStateToProps)(Home);
