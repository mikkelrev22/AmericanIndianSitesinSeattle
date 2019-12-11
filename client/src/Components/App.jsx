import React, {Component} from 'react'
import MapContainer from './MapContainer.jsx'

class App extends Component {
  constructor () {
    super ()
    this.state = {
      map: null,
      displayMarkers: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState ({
    displayMarkers: true
    })
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleClick}>Display sites</button>
        </div>
        <div>
          <MapContainer display={this.state.displayMarkers}/>
        </div>
      </div>
    )
  }
}

export default App