import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AppContainer from './components/App';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Router>
          <AppContainer />
        </Router>
      </div>
    );
  }
}

export default App;
