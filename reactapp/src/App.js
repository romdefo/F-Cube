import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Student from './screens/Student';
import Insertion from './screens/Insertion';
import Volunteer from './screens/Volunteer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/decouvrir-l-association" component={Discover} />
        <Route path="/espace-eleves" component={Student} />
        <Route path="/espace-insertion" component={Insertion} />
        <Route path="/espace-benevole" component={Volunteer} />
      </Switch>
    </Router>
  );
}

export default App;