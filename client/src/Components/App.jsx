import React, {Component} from 'react'
import MapContainer from './MapContainer.jsx'

class App extends Component {
  constructor () {
    super ()
    this.state = {
      map: null
    }
  }

  render() {
    return (<div>
      <MapContainer/>
      </div>
    )
  }
}

export default App