import { Link } from "react-router-dom";


// will be passing props into DogInfo from DogResults
const DogInfo = (dog) => {
    console.log(dog)
    return (
        <>
            <h2>hellooo

            </h2>
            <section className="indivDog">
                <div className="wrapper">
                    <article className="dogInfo">

                        <div className="imgContainer">
                            <img
                                src={dog.image}
                                alt={`Picture of ${dog.name}`}
                            />
                        </div>

                        <div className="textContainer">
                            <h2>{dog.name}</h2>
                            <h3>{dog.breed}</h3>
                        </div>

                    </article>

                </div>

            </section>
        </>
    )
}

export default DogInfo;