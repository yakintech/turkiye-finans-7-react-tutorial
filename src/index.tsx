import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CounterProvider } from './contextSample/CounterContext';
import { FavoritesProvider } from './contextSample/FavoritesContext';
import { LoginProvider } from './loginOperations/LoginContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <LoginProvider>
    <FavoritesProvider>
      <CounterProvider>
        <BrowserRouter>
          <App></App>
        </BrowserRouter>
      </CounterProvider>
    </FavoritesProvider>
  </LoginProvider>



);



// js - ts
// jsx - tsx