import axios from "axios";

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'


// will be passing props into DogInfo from DogResults
const DogInfo = () => {
    console.log('DogInfo has rendered')

    // initialize state for individual dog info from the API
    const [dogDetails, setDogDetails] = useState({});

    // initialize useEffect to run data fetching side effect, running once on component load
    // make API request with axios
    // update state with the returned data

    return (
        <p>some good dog info</p>

        // render dog info returned from the API - will want to display the dog picture, name, breed, temperament, size
    )
}

export default DogInfo;