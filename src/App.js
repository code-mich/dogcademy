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
  const [randomDog, setRandomDog] = useState([])



  // initialize useEffect to run data fetching side effect, running once on page load

  useEffect(() => {


    // make an API request with axios
    axios({
      url: 'https://api.thedogapi.com/v1/breeds/',
      params: {
        api_key: '66fcc1ee-a8c7-4295-bee8-644c3d894b8d',
      }
      // save the returned data within state
    }).then((res) => {
      setDogs(res.data)
    })

  }, []);

  // const dogRandomizer = (dogsArray) => {
  //   setRandomDog((dogsArray[Math.floor(Math.random() * dogs.length)
  //   ]))
  // }

  const dogRandomizer = (array) => {
    setRandomDog(array.sort(() => Math.random() - Math.random()).slice(0, 9))
  }

  const userSelection = (selection) => {
    setSelectedDog(selection)
    // console.log(selectedDog)
  }


  return (
    <div className="App">
      <Header />
      {console.log(randomDog)}
      <main>
        <LandingForm
          dogData={dogs}
          randomize={dogRandomizer} />

        {/* if user has clicked the button to generate random dogs, the dog results gallery will show */}
        {randomDog.length > 0
          ? <DogResults
            dogData={dogs}
            dogSelection={userSelection}
            randomDogData={randomDog}
          /> : null}

        {/* <DogResults
          dogData={dogs}
          dogSelection={userSelection}
          randomDog={dogRandomizer}
        /> */}
        {/* use Route component to wrap individual Route paths */}
        {/* <Routes>
          <Route path="/" element={
            <LandingForm
              dogData={dogs}
              randomDog={dogRandomizer} />} />
          <Route path="/results" element={
            <DogResults
              dogData={dogs}
              dogSelection={userSelection}
              randomDog={dogRandomizer}
            />} />
          <Route path="/:dogId" element={
            <DogInfo />} />
        </Routes> */}
      </main>

      {/* <Footer /> */}

    </div>
  );
}

export default App;
