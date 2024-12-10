import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import BasicInfo from './pages/BasicInfo';
import Team from './pages/Team';
import Projects from './pages/Projects';
import Outcome from './pages/Outcome';
import IPDetails from './pages/IPdetails';
import Impact from './pages/Impact';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basic-info" element={<BasicInfo />} />
            <Route path="/team" element={<Team />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/outcome" element={<Outcome />} />
            <Route path="/ip-details" element={<IPDetails />} />
            <Route path="/impact" element={<Impact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

