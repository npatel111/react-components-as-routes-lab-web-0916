import React from 'react'
import { directors } from '../data'

const Directors = () => {
    return (
        <div>
            {/* code goes here */}
          <h1>Directors Page</h1>
          {directors.map((director, index) => (
            <div key={index}>{director.name}
            <p> Movies </p>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
            </div>

          ))}
        </div>
    )
}

module.exports = Directors
