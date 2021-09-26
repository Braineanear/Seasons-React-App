import React from 'react';
import 'semantic-ui-css/semantic.min.css'

import Spinnder from './components/Spinner';
import SeasonDisplay from './components/SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      errorMessage: ''
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render(){
    console.log(this.state.latitude);
    if (!this.state.latitude && this.state.errorMessage) {
      return (<div>Error Message: {this.state.errorMessage}</div>);
    }
    if (this.state.latitude && !this.state.errorMessage) {
      return (<SeasonDisplay latitude={this.state.latitude}/>);
    }
    return <Spinnder/>
  }
}

export default App;
