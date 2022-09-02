import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../node_modules/font-awesome/css/font-awesome.min.css"    //link font-awesome
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"    //import bootstrap
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css"
import { Provider } from "react-redux"
import { Store } from './Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);