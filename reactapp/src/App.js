import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Student from './screens/student/Student';
import Insertion from './screens/Insertion';
import Volunteer from './screens/benevole/Volunteer';
import Act from './screens/discover/Act';
import Admin from './screens/Admin'
import Discover from './screens/discover/Discover';
import {ThemeProvider} from '@mui/material';
import theme from './components/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>   
      <Router>
        <Switch>
          <Route exact path="/" component={Discover} />
          <Route path="/decouvrir-l-association" component={Discover} />
          <Route path="/espace-eleve" component={Student} />
          <Route path="/espace-insertion" component={Insertion} />
          <Route path="/espace-benevole" component={Volunteer} />
          <Route path="/j-agis" component={Act} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;