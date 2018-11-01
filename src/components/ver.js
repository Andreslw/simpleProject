import React, { Component } from 'react'
import { connect } from 'react-redux'
import GoogleMaps from './google_maps_react'

class Ver extends Component{
  render(){
    const { usuario } = this.props
    if(!usuario) return <div>Sin datos</div>

    return (
      <div>
        <h3>Nombre: { usuario.nombre }</h3>
        <h3>E-mail: { usuario.email }</h3>
        <h3>fecha de nacimiento: { usuario.fecha_nacimiento }</h3>
        <h3>Direccion: { usuario.direccion } </h3>
        <h3>Colonia: { usuario.colonia }</h3>
        <div>
          <GoogleMaps />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ usuarios }, ownProps){
  return { usuario: usuarios[ownProps.match.params.id] }
}

export default connect(mapStateToProps)(Ver)
