import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { guardaUsuario } from "../actions/index";

class Nuevo extends Component {
  renderField({ label, hidden, type = "text", placeholder = "", input, meta }) {
    const { touched, error } = meta;
    let className = `form-group ${touched && error ? "has-danger" : ""}`;
    className += hidden ? " hidden " : "";
    return (
      <div className={className}>
        <label>{label}</label>
        <input
          className="form-control"
          placeholder={placeholder}
          type={type}
          {...input}
        />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }
  componentDidMount() {
    this.props.initialize(this.getUserEditar());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match !== nextProps.match) {
      this.props = nextProps;
      this.props.initialize(this.getUserEditar());
    }
  }

  getUserEditar = () => {
    const userId = this.props.match.params.id;
    return userId ? this.props.usuarios[userId] : {};
  };

  onSubmit(values) {
    this.props.guardaUsuario(values);
    this.props.history.push("/");
  }

  render() {
    const { handleSubmit } = this.props;
    const userId = this.props.match.params.id;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          type="text"
          name="id"
          hidden={true}
          component={this.renderField}
        />
        <Field
          name="nombre"
          label="Nombre"
          placeholder="Juan Martinez Martinez"
          component={this.renderField}
        />
        <Field
          name="email"
          type="email"
          placeholder="micorreo@empresa.com"
          label="E-mail"
          component={this.renderField}
        />
        <Field
          name="fecha_nacimiento"
          placeholder="dd/mm/aaaa"
          label="Fecha Nacimiento"
          component={this.renderField}
        />
        <h3>Domicilio</h3>
        <Field
          name="direccion"
          label="Dirección"
          component={this.renderField}
        />
        <Field name="colonia" label="Colonia" component={this.renderField} />
        <button className={userId ? "btn btn-primary" : "btn btn-success"}>
          {userId ? "Actualizar" : "Guardar"}
        </button>
        <Link className="btn btn-danger" to="/">
          Cancelar
        </Link>
      </form>
    );
  }
}
function validate(values) {
  const errors = {};
  const campos = [
    "nombre",
    "email",
    "fecha_nacimiento",
    "direccion",
    "colonia",
    "cp"
  ];
  campos.forEach(c => {
    if (!values[c]) {
      errors[c] = `Ingrese el campo ${c.replace(/_/, " ")}`;
      return;
    }
    if (
      c === "email" &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values[c])
    ) {
      errors[c] = "Ingrese un email válido";
    }
    if (c === "fecha_nacimiento") {
      const datos = values[c].match(/([0-9]{2})\/([0-9]{2})\/([0-9]{4})/);
      if (
        datos &&
        isNaN(new Date(`${datos[3]}/${datos[2]}/${datos[1]}`).getTime())
      ) {
        errors[c] = "Ingrese una fecha de nacimiento válido";
      }
    }
  });
  return errors;
}

function mapStateToProps({ usuarios }) {
  return { usuarios };
}
export default reduxForm({
  validate,
  destroyOnUnmount: true,
  form: "Usuarios-form"
})(
  connect(
    mapStateToProps,
    { guardaUsuario }
  )(Nuevo)
);
