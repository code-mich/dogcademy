import axios from "axios";

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import DogCard from "./DogCard";


// will be passing props into DogInfo from DogResults
const DogInfo = (props) => {

    // console.log(props)

    // extract dog id
    // const { dogId } = useParams()

    // // initialize state for individual dog info from the API
    // const [dogDetails, setDogDetails] = useState({});
    // const [dogRef, setDogRef] = useState('')
    // const [dogImage, setDogImage] = useState({});



    // initialize useEffect to run data fetching side effect, running once on component load

    // useEffect(() => {
    //     console.log('another side effect lol')

    //     axios({
    //         url: `https://api.thedogapi.com/v1/breeds/${dogId}`,
    //         params: {
    //             api_key: '66fcc1ee-a8c7-4295-bee8-644c3d894b8d',
    //             breed_id: `${dogId}`
    //         }
    //     }).then((response) => {
    //         console.log(response)
    //     })
    // })

    // useEffect(() => {
    //     // make an API request with axios
    //     axios({
    //         url: `https://api.thedogapi.com/v1/breeds/${dogId}`,
    //         params: {
    //             api_key: '66fcc1ee-a8c7-4295-bee8-644c3d894b8d',
    //             attach_breed: `${dogId}`
    //         }
    //         // save the returned data within state
    //     })
    //         .then((dog) => {
    //             setDogDetails(dog.data)
    //             console.log(dog.data)

    //             setDogRef(dog.data.reference_image_id)
    //             console.log(dogRef)

    //             return axios({
    //                 url: `https://api.thedogapi.com/v1/images/${dogRef}`,
    //                 params: {
    //                     api_key: '66fcc1ee-a8c7-4295-bee8-644c3d894b8d',
    //                     image_id: `${dogRef}`
    //                 }
    //             }).then((response) => {
    //                 setDogImage(response.data.url)
    //                 console.log(dogImage)
    //             })
    //         })

    // }, [dogId]);

    // useEffect(async () => {
    //     try {
    //         const res2 = await axios({
    //             url: `https://api.thedogapi.com/v1/images/${dogRef}`,
    //             params: {
    //                 api_key: '66fcc1ee-a8c7-4295-bee8-644c3d894b8d',
    //                 image_id: res.data.reference_image_id
    //             }
    //         })

    //         // console.log(res)
    //         // console.log(res2)

    //         setDogDetails(props.data)
    //         console.log(dogDetails)
    //         setDogRef(props.data.reference_image_id)
    //         setDogImage(props.data.url)

    //     } catch (e) {
    //         console.log(e);
    //     }
    // }, [dogId])


    return (
        <section className="indivDog">
            <div className="wrapper">
                <article className="dogInfo">

                    <div className="imgContainer">
                        {/* <img
                            src={dogImage}
                            alt={`Picture of ${dogDetails.name}`}
                        /> */}
                    </div>
                </article>

                <p>{props.name}</p>

            </div>

        </section>

        // render dog info returned from the API - will want to display the dog picture, name, breed, temperament, size
        // id = {dog.id}
        // name = {dog.name}
        // image = {dog.image.url}
        // breed = {dog.breed_group}
        // bred for: {dog.bred_for}
        // height: {dog.height.metric}
        // life span: {dog.life_span}
        // temperament: {dog.temperament}
    )
}

export default DogInfo;