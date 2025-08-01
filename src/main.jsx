import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import App from './App.jsx';
import Project from './Project.jsx';
import Error from './components/Error.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Error />} />
        <Route path='/' element={<App />} />
        <Route path='/project/:id' element={<Project />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
