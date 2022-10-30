import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory } from "history";
import App from "./app";

// Mount function to start up the app
const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);
};

// If we are in development and in isolation
// call mount immediately

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot, {});
  }
}

// We are running through container
// and we should export the mount function

export { mount };
