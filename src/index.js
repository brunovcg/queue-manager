import React from "react";
import ReactDOM from "react-dom";
import Providers from "./providers";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
