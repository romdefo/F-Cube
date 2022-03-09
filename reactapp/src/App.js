<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Student from "./screens/student/Student";
import Insertion from "./screens/Insertion";
import Volunteer from "./screens/Volunteer";
import Act from "./screens/Act";
import Admin from "./screens/Admin";
import Discover from "./screens/discover/Discover";
import theme from "./components/Theme";
import { ThemeProvider } from "@mui/material";

// Le store où on va stocker le token de l'admin
import admin from "./reducers/admin.reducer";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const store = createStore(combineReducers({ admin }));

function App() {
  return (
<<<<<<< HEAD
    
    <Provider store={store}>
=======
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
>>>>>>> finalDiscover
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
<<<<<<< HEAD
    </Provider>
=======
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Discover} />
            <Route path="/espace-eleve" component={Student} />
            <Route path="/espace-insertion" component={Insertion} />
            <Route path="/espace-benevole" component={Volunteer} />
            <Route path="/j-agis" component={Act} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
>>>>>>> db089bf222f2888a52582f4f684595ecf9745dce
=======
    </ThemeProvider>
>>>>>>> finalDiscover
  );
}

export default App;
