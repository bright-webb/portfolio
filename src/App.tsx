import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import './App.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;