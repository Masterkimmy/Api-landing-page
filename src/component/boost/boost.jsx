import React from 'react'
import "./boost.css"
import background from "../../../images/bg-boost-desktop.svg"

const boost = () => {
  return (
    <div style={{backgroundImage: `url(${background})`}} className='links '>
      <h1>Boost your links today</h1>
      <button>Get started</button>
    </div>
  )
}

export default boost
