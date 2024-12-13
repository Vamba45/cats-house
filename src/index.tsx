import React from 'react';
import ReactDOM from 'react-dom/client';
import { Main } from './pages/main/main.tsx';
import './scss/index.scss';
import { Header } from './components/header/header.tsx';
import { Provider } from 'react-redux';
import { setupStore } from './store/store.ts';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
      <Header/>
      <Main/>
  </Provider>
);
