import Movie from "../components/Movie";
import { useEffect } from 'react'

const MovieService = ({ movie }) => <section>
    {movie?.length > 0 ? movie.map((movies) => <Movie key={actor.name} actor={movies}/>) 
    : null}
</section>

const movieFields = `
    string,
    reference,
  `
  
  const actorFields = `
  string,
  'slug': slug.current,
  `

  export const getEvents = async () => {
    const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`)(`*[_type == "slug"]{${actorFields}}`);
    return data;
  };

  useEffect(() => {
    getEvents()
}, [])

// export default MovieService;
