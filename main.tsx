// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './components/globals.css';
import '@fontsource/bricolage-grotesque/500.css';
import '@fontsource/open-sans/400.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
