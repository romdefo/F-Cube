import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Student from './screens/student/Student';
import Insertion from './screens/Insertion';
import Volunteer from './screens/Volunteer';
import Act from './screens/Act';
import Admin from './screens/Admin'
import Discover from './screens/discover/Discover';
//import Nav from './components/Nav'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/decouvrir-l-association" component={Discover} />
        <Route path="/espace-eleve" component={Student} />
        <Route path="/espace-insertion" component={Insertion} />
        <Route path="/espace-benevole" component={Volunteer} />
        <Route path="/j-agis" component={Act} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;