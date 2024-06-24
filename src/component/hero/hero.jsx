import React from 'react'
import "./hero.css"
import one from "../../../images/illustration-working.svg"

const hero = () => {
  return (
    <div className='hero'>
      <div>
          <div className='noted'>
            <h1 className='more'> More Than just shorter links </h1>  
            <p className='build'>Build your brands recognition and get detailed insight on how your links are performing.</p>  
          </div>
            <div className='mami'>
                  <button className='get'>Get started</button>
            </div>
      </div>
      <img className='one' src={one} alt="" />
    </div>
  )
}

export default hero
