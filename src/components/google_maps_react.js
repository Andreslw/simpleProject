import React, { Component } from 'react'

class GoogleMaps extends Component{
  componentDidMount(){
      const google = window.google;
      new google.maps.Map(this.refs.map,{
        zoom: 12,
        center: {
          lat: 19.4406882,
          lng: -99.1737227
        }
      })
  }
  render (){
    return (
      <div style={ {width:"100%", height: '500px'} } ref="map" />
    )
  }
}

export default GoogleMaps
