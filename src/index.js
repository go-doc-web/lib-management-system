import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AppProvider } from './context/AppContext';
import { ModalProvider } from './context/ModalContext';
import Modal from './componets/Modal';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <ModalProvider>
          <App />
          <Modal />
        </ModalProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
