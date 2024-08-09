import React from 'react';
import 'modern-normalize';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
     <App />
    </PersistGate>  
   </Provider>
  </React.StrictMode>
);
