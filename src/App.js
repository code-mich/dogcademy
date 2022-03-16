import './App.css';

import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Header from './Header';
import LandingForm from './LandingForm';
import DogResults from './DogResults';
import DogInfo from './DogInfo';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>

        {/* use Route component to wrap individual Route paths */}
        <Routes>
          <Route path="/" element={<LandingForm />} />
          <Route path="/results" element={<DogResults />} />
          <Route path="/:dogId" element={<DogInfo />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;
