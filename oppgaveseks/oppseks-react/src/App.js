import Movie from './Movie'
import Movies from './Movies'
import Routes from './Routes'
import MovieService from '../services/MovieService'

function App() {
  return (
    <>
    <Movie title='Baywatch' actor='Dwayne-Johnson' movie={Movie} />
    <Movies />
    <Routes />
    <MovieService />
    </>
  );
}

export default App;

