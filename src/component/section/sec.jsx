import React from 'react'
import "./sec.css"
import background from "../../../images/bg-shorten-desktop.svg"
import only from "../../../images/icon-brand-recognition.svg"
import many from "../../../images/icon-detailed-records.svg"
import goal from "../../../images/icon-fully-customizable.svg"


const sec = () => {
  return (
    <div className='sec'>
      <div style={{backgroundImage: `url(${background})`}} className='input'>
        <input className='type' type="text" placeholder='shorten a link here' required />
        <button className='btn'>Shorten it!</button>
      </div>
        <div className='boot'>
            <div className='frontmentor'>
                    <div className='popsy'>
                        <h3>https://.frontendmentor,io</h3>
                    </div>
                <div className='top'>
                    <h3 className='span'>https//rel.ink/k4kyk</h3>
                    <button className='copy'>copy</button>
                </div>
            </div>
            <div className='frontend'>
                <h3>https://twitter.com/frontendmentor</h3>
                <div className='top'>
                    <h3 className='span'>https.//rel.ink/gxop9</h3>
                    <button className='copy'>copy</button>
                </div>
            </div>
            <div className='front'>
                <h3>https://www.linkedin.com/company/</h3>
                <div className='top'>
                    <h3 className='span'>https://rel.ink/gob3x9</h3>
                    <button className='copy'>copy</button>
                </div>
            </div>
        </div>
        <div className='grand'>
             <div className='advanced'>
                <h1>Advanced Statistics</h1>
                <p>Track how links are performing across the web with our advanced Statistics dashborad</p>
             </div>
           <div className='records'>
                     <div className='each'>
                        <div className='only'>
                            <img className='gun' src={only} alt="" />
                        </div>
                            <div className='boost'>
                                <h2>Brand Recongnition</h2>
                                <p>Boost your brand recognition with each click. Generic links don't mean a things. Branded links helps instil confidences in your content.</p>
                            </div>
                    </div>
                    <div className='gain'>
                        <div className='only'>
                             <img className='gun' src={many} alt="" />
                        </div>
                        <div className='boost'>
                            <h2>Detailed Records </h2>
                            <p>Gain insight into who s clicking your links. knowing when and where people engage with your content helps inform better decisions.</p>
                        </div>
                    </div>
                    <div className='fully'>
                        <div className='only'>
                            <img className='gun' src={goal} alt="" />
                        </div>
                        <div className='boost'>
                                <h2>Fully Customizable</h2>
                                <p>improve brand awearness and content discoverbility through customizable links. supercharging audiences engagement. </p>
                        </div>
                 </div>
           </div>
        </div>
      
    </div>
  )
}

export default sec
