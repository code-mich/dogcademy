import axios from 'axios'

import { useState, useEffect } from 'react'

import DogCard from './DogCard'

const DogResults = () => {
    // console.log('DogResults is rendered')

    // initialize state to track dog data from the API
    const [dogs, setDogs] = useState([]);

    // initialize useEffect to run data fetching side effect, running once on page load

    useEffect(() => {
        console.log('side effect is running')
        // make an API request with axios
        axios({
            url: 'https://api.thedogapi.com/v1/breeds/',
            params: {
                api_key: '66fcc1ee-a8c7-4295-bee8-644c3d894b8d',
                limit: 10
            }
            // save the returned data within state
        }).then((dogs) => {
            console.log(dogs.data)
            setDogs(dogs.data)
        })

    }, []);


    return (

        <section className="results" id="results">
            <div className="wrapper">
                <h2>look there are dogs</h2>
                <ul className="dogGallery">
                    {
                        dogs.map((dogs) => {
                            return (
                                <DogCard
                                    id={dogs.id}
                                    name={dogs.name}
                                    image={dogs.image.url}
                                />
                            )
                        })
                    }
                </ul>

            </div>

        </section >

    )
}

export default DogResults;