import { useState } from 'react'

const DogCard = (props) => {
    const [learnMore, setLearnMore] = useState(false);

    // called when user toggles the learnMore state
    const ExtraInfo = () => {
        return (
            <div className="moreInfo">
                <ul className="extraInfo">
                    <span>
                        <li className="shortText">
                            <h4>Breed:</h4> <p>{props.breed}</p>
                        </li>
                        <li className="shortText">
                            <h4>Height:</h4> <p>{props.height}</p>
                        </li>
                        <li className="shortText">
                            <h4>Life span:</h4> <p>{props.lifeSpan}</p>
                        </li>
                    </span>
                    <span>
                        <li>
                            <h4>Bred for: </h4> <p>{props.bredFor}</p>
                        </li>
                        <li>
                            <h4>Temperament: </h4> <p>{props.temperament}</p>
                        </li>
                    </span>
                </ul>
            </div>
        )
    }

    // change text on button depending on the state of learnMore
    const changeButton = learnMore ? 'Collapse' : 'Learn More'

    return (
        <li
            className={learnMore ? "expandedDogCard" : "dogCard"}
            key={props.id}
        >
            <div className="mainInfo">

                <h3>{props.name}</h3>
                <div className="imgContainer">

                    <img
                        src={props.image}
                        alt={`Picture of ${props.name}`}
                    />
                </div>
                {
                    learnMore ? <ExtraInfo /> : null
                }
                <button
                    className="learnMore"
                    onClick={() => {
                        setLearnMore(!learnMore)
                    }}
                >{changeButton}</button>
            </div>
        </li>
    )
}

export default DogCard;