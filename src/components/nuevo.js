import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { guardaUsuario } from '../actions/index'

class Nuevo extends Component{

  renderField({ label, type="text", placeholder="",input, meta}){
    const { touched, error } = meta
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{ label }</label>
        <input
          className="form-control"
          placeholder={placeholder}
          type={type}
          { ...input }
          />
          <div className="text-help">
            {touched ? error : ''}
          </div>
      </div>
    )
  }

  onSubmit(values){
    this.props.guardaUsuario(values)
    this.props.history.push("/")
  }

  render(){
    const { handleSubmit } = this.props
    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <Field name="nombre" label="Nombre" placeholder="Juan Martinez Martinez" component={ this.renderField }/>
        <Field name="email" type="email" placeholder="micorreo@empresa.com" label="E-mail" component={ this.renderField }/>
        <Field name="fecha_nacimiento" placeholder="dd/mm/aaaa" label="Fecha Nacimiento" component={ this.renderField }/>
        <h3>Domicilio</h3>
        <Field name="direccion" label="Dirección" component={ this.renderField }/>
        <Field name="colonia" label="Colonia" component={ this.renderField }/>
        <button className="btn btn-success">Guardar</button>
        <Link className="btn btn-danger" to="/">Cancelar</Link>
      </form>
    )
  }
}
function validate(values){
  const errors = {}
  const campos = ["nombre", "email", "fecha_nacimiento", "direccion", "colonia","cp"]
  campos.forEach(c => {
    if(!values[c]){
      errors[c] = `Ingrese el campo ${c.replace(/_/," ")}`
    }
    if(c === "email" && values[c] && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values[c])){
      errors[c] = "Ingrese un email válido"
    }
    if(c === "fecha_nacimiento" && values[c] && !/^(?:3[01]|[12][0-9]|0?[1-9])([/])(0?[1-9]|1[1-2])\1\d{4}$/.test(values[c])){
      errors[c] = "Ingrese una fecha de nacimiento válido"
    }
  })
  return errors
}

export default reduxForm({
  validate, form: 'Usuarios-form'
})( connect(null, { guardaUsuario })(Nuevo) )
