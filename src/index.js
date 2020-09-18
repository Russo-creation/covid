import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./layout/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.Suspense fallback={<div>Loading</div>}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </React.Suspense>,
  document.getElementById("root")
);

serviceWorker.unregister();
