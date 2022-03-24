import { Routes, Route } from 'react-router-dom'
import Movie from '/.Movie'

<Routes>
    <Route>
      <Route path="/movie" element={<Movie />} />
      <Route path="/actor" element={<Movie />} />
      <Route path="/actor/:name" element={<Movie />} />
    </Route>
</Routes>
