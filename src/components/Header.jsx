import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Header extends React.Component{
  render(){
    return (
      <nav className="navbar navbar-inverse">
       <div className="container-fluid">
         <div className="navbar-header">
           <NavLink className="navbar-brand" exact to="/">Usuarios</NavLink>
         </div>
         <ul className="nav navbar-nav navbar-right">
           <li><NavLink exact to="/usuarios/nuevo">Nuevo</NavLink></li>
         </ul>
       </div>
     </nav>
    )
  }
}
