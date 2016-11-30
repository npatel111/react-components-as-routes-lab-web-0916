import React from 'react'

import NavBar from './NavBar'

const App = (props) => {
    return (
        <div>
            {/* code goes here */}
            <NavBar />
            <div className="div">
              I am the child prop
            </div>
        </div>
    )
}

module.exports = App
