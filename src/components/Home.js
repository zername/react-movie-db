import React, {useState} from 'react';
//Config
import {IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from '../config';
//Image
import NoImage from '../images/no_image.jpg';
//Hook


const Home = () => {

    const [state, setState] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <div>
            Home Page
        </div>
    )
}

export default Home


