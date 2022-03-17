import './App.scss';

import axios from 'axios';
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Header from './Header';
import LandingForm from './LandingForm';
import DogResults from './DogResults';
import DogInfo from './DogInfo';
import Footer from './Footer';

function App() {

  const [dogs, setDogs] = useState([]);
  const [selectedDog, setSelectedDog] = useState([]);

  // initialize useEffect to run data fetching side effect, running once on page load

  useEffect(() => {

    // make an API request with axios
    axios({
      url: 'https://api.thedogapi.com/v1/breeds/',
      params: {
        api_key: '66fcc1ee-a8c7-4295-bee8-644c3d894b8d',
        limit: 3
      }
      // save the returned data within state
    }).then((res) => {
      console.log(res.data)
      setDogs(res.data)
    })

  }, []);

  const userSelection = (selection) => {
    setSelectedDog(selection)
    // console.log(selectedDog)
  }


  return (
    <div className="App">
      <Header />
      {console.log(selectedDog)}
      <main>

        {/* use Route component to wrap individual Route paths */}
        <Routes>
          <Route path="/" element={<LandingForm />} />
          <Route path="/results" element={<DogResults
            dogData={dogs}
            dogSelection={userSelection}
          />} />
          <Route path="/:dogId" element={<DogInfo />} />
        </Routes>
      </main>

      {/* <Footer /> */}

    </div>
  );
}

export default App;
