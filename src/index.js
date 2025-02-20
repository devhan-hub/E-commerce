import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from './redux/store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={3000}
          closeOnClick={false}
          pauseOnHover={false} />
        <App />
      </Provider>
    </BrowserRouter>

  </React.StrictMode>
);
