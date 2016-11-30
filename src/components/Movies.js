import React from 'react'
import { movies } from '../data'

const Movies = () => {
    return (
        <div>
            {/* code goes here */}
            <h1>Movies Page</h1>
            {movies.map((movie, index) => (
              <div key={index}>{movie.title} {movie.time}
                <ul>
                  {movie.genres.map((genre, index) => (
                    <li>{genre}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
    )
}

module.exports = Movies
