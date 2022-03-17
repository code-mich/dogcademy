import DogCard from './DogCard'

const DogResults = (props) => {
    console.log(props)
    // props.randomDog(props.dogData)


    return (

        <section className="results" id="results">
            <div className="wrapper">
                <h2>look there are dogs</h2>
                <ul className="dogGallery">
                    {
                        props.randomDogData.map((randomDog) => {
                            return (
                                <DogCard
                                    key={randomDog.id}
                                    name={randomDog.name}
                                    image={randomDog.image.url}
                                    breed={randomDog.breed_group}
                                    bredFor={randomDog.bred_for}
                                    height={randomDog.height.metric}
                                    lifeSpan={randomDog.life_span}
                                    temperament={randomDog.temperament}
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