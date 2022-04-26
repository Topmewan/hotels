import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from "./components/Layout/App";
import {HeaderProvider} from "./providers/HeaderProvider";
import {BrowserRouter} from "react-router-dom";
import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderProvider>
        <App/>
      </HeaderProvider>
    </BrowserRouter>
  </React.StrictMode>
);

