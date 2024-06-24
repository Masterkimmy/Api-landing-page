import React, { useState } from 'react'
import "./nav.css"
import logo from "../../../images/logo.svg"
import  { FaOutdent} from 'react-icons/fa'
import { IoMdClose } from "react-icons/io";


const nav = () => {
  const [toggle, setTogle] = useState(false)

  function handleToggle(){
    if(toggle === true){
      setTogle(false)
    }else{
      setTogle(true)
    }
  }

  function handleClose(){
    setTogle(false)
  }
  return (
    <>
    <div className='navbar'>
         <div className='top'>
          <img className='short'  src={logo} alt="" />
          <div className='logo'>
              <h4 className='fit'>feature</h4>
              <h4 className='price'>pricing</h4>
              <h4 className='sources'>Resources</h4>
          </div>
         </div>
        <div className='login'>
            <h4>Login</h4>
            <button className='up'>sign up</button>
        </div>
          <div className='react-icon'>
            <div className={toggle ? 'in': 'out'} onClick={handleToggle}><FaOutdent/></div>
            <div className={toggle ? 'out': 'in'} onClick={handleClose}><IoMdClose/></div>
          </div>
    </div>

    <div className={toggle ? 'mobile-nav' : 'none'}>
              <h4 >feature</h4>
              <h4 >pricing</h4>
              <h4 >Resources</h4>
            <button className='btn-1'>Login</button>
            <button className='btn-2'>sign up</button>
    </div>

    </>
  )
}

export default nav
