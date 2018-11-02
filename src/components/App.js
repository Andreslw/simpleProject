import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './home'
import Header from './Header'
import Ver from './ver'
import Nuevo from './nuevo'
import { cargaUsuarios } from '../actions'

class App extends Component {
  componentWillMount(){
    console.log(`cargando datos locales`)
    let usuarios = localStorage.getItem("usuarios")
    if(usuarios){
      this.props.cargaUsuarios(JSON.parse(usuarios))
    }
  }

  render() {
    return (
        <BrowserRouter>
        <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/usuarios/nuevo" component={Nuevo} />
              <Route path="/usuarios/:id" component={Ver} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default connect(null, { cargaUsuarios })(App);
