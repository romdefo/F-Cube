import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./screens/admin/Admin";
import HomePage from "./screens/homepage/HomePage";
import theme from "./components/Theme";
import { ThemeProvider } from "@mui/material";

// Le store où on va stocker le token de l'admin
import admin from "./reducers/admin.reducer";
import article from "./reducers/article.reducer";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const store = createStore(combineReducers({ admin, article }));

function App() {
  return (

    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>

  );
}

export default App;