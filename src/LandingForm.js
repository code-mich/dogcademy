
const LandingForm = (props) => {

    return (
        <section className="home" id="home">
            <div className="wrapper">
                <div className="landingText">
                    <h2>
                        Let's learn about dogs!
                    </h2>
                    <p>Click on the button below to see a random selection of dogs. See one you like? Click on the learn more button for some good ole dog facts</p>
                    <button
                        onClick={() => {
                            props.randomize(props.dogData);

                        }}
                    >
                        lets get some dogs
                    </button>
                </div>

            </div>

        </section>

    )
}

export default LandingForm;