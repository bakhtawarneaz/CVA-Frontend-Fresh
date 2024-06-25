import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { Provider } from "react-redux";
import { Toaster } from 'react-hot-toast';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Toaster position="top-center" />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
