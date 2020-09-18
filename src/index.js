import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./layout/App";
import * as serviceWorker from "./serviceWorker";
import store from "./store/store";
import { Provider } from "react-redux";

import "./i18n";

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading</div>}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
