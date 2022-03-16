import { Link } from "react-router-dom";

const DogCard = (props) => {

    return (
        <li
            className="dogCard"
            key={props.id}>

            <Link to={`/${props.id}`}>
                <h3>{props.name}</h3>
                <img
                    src={props.image}
                    alt={`Picture of ${props.name}`}
                />
            </Link>
        </li>
    )
}

export default DogCard;