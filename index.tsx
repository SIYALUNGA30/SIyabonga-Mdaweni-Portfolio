import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// FIX: Replaced placeholder content with a standard React entry point to resolve "Cannot find name" errors.
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
