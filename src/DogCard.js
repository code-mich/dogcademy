import { Link } from "react-router-dom";

const DogCard = (props) => {
    console.log(props)

    return (
        <li
            className="dogCard"
            key={props.id}
        >

            <h3>{props.name}</h3>
            <img
                src={props.image}
                alt={`Picture of ${props.name}`}
            />
            {/* <Link to={`/${props.id}`}> */}
            <button
                onClick={() => props.dogSelection(props)}
            >button</button>
            {/* </Link> */}
        </li>
    )
}

export default DogCard;