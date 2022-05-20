import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaPrincipal from './pages/home';
import Admin from './pages/admin';
import Cadastro from './pages/cadastro';
import Geral from './pages/geral';
import Controle from './pages/controle';
import Menu from './pages/menu';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path = '/' element={<PaginaPrincipal/>} />
      <Route path = '/admin' element={<Admin />} />
      <Route path = '/cadastro' element={<Cadastro/>} />
      <Route path = '/geral' element={<Geral/>} />
      <Route path = '/controle' element={<Controle/>} />
      <Route path = '/menu' element={<Menu/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

