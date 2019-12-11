import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'
import React, {Component} from 'react'
import apiKey from '../lib.js'

class MapContainer extends Component {
  constructor (props) {
    super (props)
    this.state = {
      stores: [{lat: 47.667528, lng: -122.400924}]
    }
  }

  displayMarkers () {
    if (this.props.display) {
      return this.state.stores.map((store, i)=>{
        return <Marker key={i} position={{
          lat: store.lat,
          lng: store.lng
        }}
        />
      })
    }
  }

  render () {
    return (
      <div>
      <div>
        <Map
          google={this.props.google}
          zoom={10}
          initialCenter={{lat: 47.6062, lng: -122.3321}}>
          {this.displayMarkers()}
        </Map>
      </div>
      </div>
    )
  }
}
export default GoogleApiWrapper({apiKey: apiKey.apiKey})(MapContainer)