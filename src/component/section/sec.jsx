import React, { useState } from 'react'
import "./sec.css"
import background from "../../../images/bg-shorten-desktop.svg"
import only from "../../../images/icon-brand-recognition.svg"
import many from "../../../images/icon-detailed-records.svg"
import goal from "../../../images/icon-fully-customizable.svg"


const sec = () => {
    const [Input, setInput]=useState("")
    const [Url,setUrl] =useState(null)
    const [isClick,setIsClick]=useState(false)
    const handleInput = (e)=>{
        const value = e.target.value;
        setInput(value)
    }
           async function fetchApi(e) {
            e.preventDefault()
            // if(!Url){
            //     return alert("pls enter url")
            // }
            try {
                setIsClick(true)
                const baseurl ="https://shorturl-ovln.onrender.com/api/v1/shorturl";
                const response = await fetch(baseurl, {
                  method: "POST",
                  headers: {
                    "content-Type": "application/json",
                  },
                  body: JSON.stringify({ url: Input }),
                }).then(res => res.json());
                const returnData = await response.shorturl;
                setUrl(returnData);
                console.log(returnData); 
                if(returnData){
                    setIsClick(false)
                }
            } catch (error) {
                console.log(error.message);
                setIsClick(false)
            }
           }
        



  return (
    <div className="sec">
      <form
        onSubmit={fetchApi}
        style={{ backgroundImage: `url(${background})` }}
        className="input"
      >
        <input
          className="type"
          type="text"
          value={Input}
          onChange={handleInput}
          placeholder="shorten a link here"
        />
        <button className="btn">{isClick ? "pls wait .." : "Shorten it!"}</button>
      </form>
      <p>{Url}</p>
      <div className="boot">
        {/* <div className='frontmentor'>
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
            </div> */}
      </div>
      <div className="grand">
        <div className="advanced">
          <h1>Advanced Statistics</h1>
          <p>
            Track how links are performing across the web with our advanced
            Statistics dashborad
          </p>
        </div>
        <div className="records">
          <div className="each">
            <div className="only">
              <img className="gun" src={only} alt="" />
            </div>
            <div className="boost">
              <h2>Brand Recongnition</h2>
              <p>
                Boost your brand recognition with each click. Generic links
                don't mean a things. Branded links helps instil confidences in
                your content.
              </p>
            </div>
          </div>
          <div className="gain">
            <div className="only">
              <img className="gun" src={many} alt="" />
            </div>
            <div className="boost">
              <h2>Detailed Records </h2>
              <p>
                Gain insight into who s clicking your links. knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>
          <div className="fully">
            <div className="only">
              <img className="gun" src={goal} alt="" />
            </div>
            <div className="boost">
              <h2>Fully Customizable</h2>
              <p>
                improve brand awearness and content discoverbility through
                customizable links. supercharging audiences engagement.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default sec
