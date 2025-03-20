import React, {useState} from 'react'
import "./LoginPopUp.css"
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {
  
    const [currrState, setCurrStatet] = useState("Login")

    return (

        <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currrState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currrState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Pssword' required />
            </div>
            <button>{currrState ==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, i agree to the terms of use and privacy policy</p>
            </div>
            {currrState==="Login"?<p>Create a new acount? <span onClick={()=>setCurrStatet("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrStatet("Login")}>Login here</span ></p>}
        </form>
        </div>
  )
}

export default LoginPopUp
