import { useEffect, useState } from 'react'
import { getEvents } from '../services/MovieService'

export default function Movie() {
    const {actor, setActor} = useState([])

    const getData = async () => {
        const acctor = await getEvents([])
        setActor(actors)
    }

    useEffect(() => {
        getData()
    }, [])


return (
    <div>
    <h1>actors</h1>
    {actor.map((acctors) => (
        <h1 key={acctors._id}>{actors.name.current}</h1>
    ))}
    </div>
)

}

// const Movie = ({ title, actor }) => {
//     return (
//         <>
//         <p> {title.name} </p>
//         <p> {actor.name} </p>
//         </>
//     )
// }

// export default Movie;
