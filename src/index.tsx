import React from 'react';
import ReactDOM from 'react-dom/client';
import { Main } from './pages/main/main.tsx';
import './scss/index.scss';
import { Header } from './components/header/header.tsx';
import { Search } from './components/search/search.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Header/>
    <Main/>
  </React.StrictMode>
);
