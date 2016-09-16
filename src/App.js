import React, { Component } from 'react';
import Choice from './choice/index';
import Register from './registration/register';
import Signin from './signin/signin';
import { Match, BrowserRouter as Router } from 'react-router';

class App extends Component {
  render() {
    return (
      <Router>
        <Match exactly pattern='/' component={Choice} />
        <Match pattern='/register' component={Register} />
        <Match pattern='/signin' component={Signin} />
      </Router>
    );
  }
}

export default App;
