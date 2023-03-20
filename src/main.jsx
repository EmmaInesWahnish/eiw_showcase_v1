import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from "./index";

/** CONTEXT */
import {
  GeneralContextProvider,
} from "./contexts";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <GeneralContextProvider>
            <App />
        </GeneralContextProvider>
  </BrowserRouter>
)
