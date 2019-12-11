import {Map, GoogleApiWrapper} from 'google-maps-react'
import React, {Component} from 'react'
import apiKey from '../lib.js'

class MapContainer extends Component {
  constructor () {
    super ()
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <Map
        google={this.props.google}
        zoom={10}
        initialCenter={{lat: 47.6062, lng: -122.3321}}
        />
      </div>
    )
  }
}
export default GoogleApiWrapper({apiKey: apiKey.apiKey})(MapContainer)