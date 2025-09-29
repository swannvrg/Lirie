import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import UnderConstructionPage from './components/UnderConstructionPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UnderConstructionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;