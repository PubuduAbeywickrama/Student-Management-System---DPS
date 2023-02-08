import React from 'react'
import './login.css'

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Dimuthu Pre School</h3>
                <span className="loginDesc">Kotadeniyawa</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='User Name' className="loginInput" />
                    <input placeholder='Password' className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
