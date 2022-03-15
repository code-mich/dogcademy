import './App.css';

import { Routes, Route } from 'react-router-dom'

import Header from './Header';
import LandingForm from './LandingForm';
import DogResults from './DogResults';
import DogInfo from './DogInfo';

function App() {
  return (
    <div className="App">
      <Header />

      <LandingForm />

      <DogResults />

      <DogInfo />

      {/* use Route component to wrap individual Route paths */}
      <Routes>
        <Route path="/" element={<LandingForm />} />
        <Route path="/results" element={<DogResults />} />
        <Route path="/:dogId" element={<DogInfo />} />
      </Routes>

    </div>
  );
}

export default App;
