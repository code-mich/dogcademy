import axios from 'axios'

import { useState, useEffect } from 'react'
// use Link to make dog cards clickable
import { Link } from 'react-router-dom'

const DogResults = () => {
    console.log('DogResults is rendered')

    // initialize state to track dog data from the API
    const [dogs, setDogs] = useState([]);

    // initialize useEffect to run data fetching side effect, running once on page load
    // make an API request with axios
    // save the returned data within state



    return (
        <p>that's some good gallery</p>

        // map through state and return a card with info for each dog
        // will need section. ul elements, li, image url, alt text, name
    )
}

export default DogResults;