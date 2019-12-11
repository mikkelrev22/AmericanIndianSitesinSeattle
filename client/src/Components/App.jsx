import {Component} from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'

class App extends Component {
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
        zoom={8}
        style={mapStyles}
        initialCenter={{lat: 47.6062, lng: -122.3321}}
        />
      </div>
    )
  }
}

export default App