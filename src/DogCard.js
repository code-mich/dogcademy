import { useState } from 'react'

const DogCard = (props) => {
    const [learnMore, setLearnMore] = useState(false);

    const ExtraInfo = () => {
        return (
            <ul className="extraInfo">
                <li>Breed: {props.breed}</li>
                <li>Bred for: {props.bredFor}</li>
                <li>Height: {props.height}</li>
                <li>Life span: {props.lifeSpan}</li>
                <li>Temperament: {props.temperament}</li>
            </ul>

        )
    }

    const changeButton = learnMore ? 'Collapse' : 'Learn More'


    return (
        <li
            className={learnMore ? "expandedDogCard" : "dogCard"}
            key={props.id}
        >
            <div className="mainInfo">

                <h3>{props.name}</h3>
                <img
                    src={props.image}
                    alt={`Picture of ${props.name}`}
                />
                <button
                    onClick={() => {
                        setLearnMore(!learnMore)
                    }}
                >{changeButton}</button>
            </div>
            {
                learnMore ? <ExtraInfo /> : null
            }
        </li>
    )
}

export default DogCard;