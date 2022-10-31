import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassName = createGenerateClassName({
  // disableGlobal: true,
  productionPrefix: "au",
});

const App = ({ history, onSignIn }) => {
  return (
    <div>
      <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
          <Switch>
            <Route
              path="/auth/signin"
              render={() => <SignIn onSignIn={onSignIn} />}
            />
            <Route
              path="/auth/signup"
              render={() => <SignUp onSignIn={onSignIn} />}
            />
          </Switch>
        </StylesProvider>
      </Router>
    </div>
  );
};

export default App;
