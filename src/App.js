import React, { Component } from 'react';
import Register from './registration/register';
import Signin from './signin/signin';
import { Match, BrowserRouter as Router } from 'react-router';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Match exactly pattern='/' component={Register} />
          <Match pattern='/signin' component={Signin} />
        </div>
      </Router>
    );
  }
}

export default App;
