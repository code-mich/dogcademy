import { useState, useEffect } from 'react'

import DogCard from './DogCard'

const DogResults = (props) => {
    console.log(props)


    return (

        <section className="results" id="results">
            <div className="wrapper">
                <h2>look there are dogs</h2>
                <ul className="dogGallery">
                    {
                        props.dogData.map((dogData) => {
                            return (
                                <DogCard
                                    id={dogData.id}
                                    name={dogData.name}
                                    image={dogData.image.url}
                                    breed={dogData.breed_group}
                                    bredFor={dogData.bred_for}
                                    height={dogData.height.metric}
                                    lifeSpan={dogData.life_span}
                                    temperament={dogData.temperament}
                                    dogSelection={props.dogSelection}
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