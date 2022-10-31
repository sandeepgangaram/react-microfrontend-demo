import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  // disableGlobal: true,
  productionPrefix: "au",
});

const App = ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
          <Switch></Switch>
        </StylesProvider>
      </Router>
    </div>
  );
};

export default App;
