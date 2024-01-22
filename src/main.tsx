import React from 'react';
import { createRoot } from 'react-dom'; 
import './styles.css';
import { TodoApp } from './components/TodoApp';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
);
