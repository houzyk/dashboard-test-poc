import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root_ = document.getElementById('root');

if (root_) {
  const root = ReactDOM.createRoot(root_);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

