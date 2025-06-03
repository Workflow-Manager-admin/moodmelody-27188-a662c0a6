import React from 'react';
import './App.css';
import MainContainer from './MainContainer';

// Add routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/*" element={<MainContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;