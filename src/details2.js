import React from 'react'
import { useLocation } from 'react-router-dom'

const Details2 = () => {
    const location = useLocation();

    console.log(location, 'location')

    return (
        <div>
            <h1>{location.state.country}</h1>
        </div>
    )
}

export default Details2