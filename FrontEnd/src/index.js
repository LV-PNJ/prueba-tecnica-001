import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './routers/App';
import * as service from "./service";

ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root')
);
service.unregister();