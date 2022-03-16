import { Link } from 'react-router-dom'

const LandingForm = () => {

    return (
        <section className="home" id="home">
            <div className="wrapper">

                <Link to={`/results`}>
                    <button>lets get some dogs</button>
                </Link>
            </div>

        </section>

        // for now, have a button to randomize a selection of dogs
    )
}

export default LandingForm;