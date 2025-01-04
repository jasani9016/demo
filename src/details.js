import React from 'react'
import { useLocation } from 'react-router-dom'

const Details = () => {
    const location = useLocation();

    console.log(location, 'location')

    return (
        <div>
            <h1>{location.state.email}</h1>
            <h1>{location.state.name}</h1>
            <h1>{location.state.text}</h1>
        </div>
    )
}

export default Details