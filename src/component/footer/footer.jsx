import React from 'react'
import "./footer.css"
import facebook from "../../../images/icon-facebook.svg"
import twitter from "../../../images/icon-twitter.svg"
import pinterest from "../../../images/icon-pinterest.svg"
import instagram from "../../../images/icon-instagram.svg"

const footer = () => {
  return (
    <div className='footer'>
            <h1>Shortly</h1>
            <div className='features'>
                <h3>features</h3>
                <ul className='list'>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
            </div>
            <div className='resources'>
                <h3>Resources</h3>
                <ul className='loop'>
                    <li className='bloom'>Blog</li>
                    <li className='dev'>Developers</li>
                    <li className='sup'>Support</li>
                </ul>
            </div>
            <div className='company'>
                <h3>Company</h3>
                <ul className='list'>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='icon'>
                <img className='face' src={facebook} alt="" />
                <img className='twitt' src={twitter} alt="" />
                <img className='pin' src={pinterest} alt="" />
                <img className='gram' src={instagram} alt="" />
            </div>
      </div>
  )
}

export default footer
