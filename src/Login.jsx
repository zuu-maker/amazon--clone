import React, { useState } from 'react'
import './Login.css'

function Login() {
       const [email, setEmail] =  useState(" ");
       const [password, setPassword] = useState(" ");

     
    return (
        <div className="login">
        {/* <img src="https://i.pinimg.com/474x/31/d1/3c/31d13c99ee841869ca44ef54ba956272.jpg" alt="amazon"/> */}
        <img src="https://i.pinimg.com/474x/db/34/4c/db344c0bc366e261ed6a3e165dcfddee.jpg" alt="amazon logo"/>
                
        <div>
                
         <div className="login__form">
            <h2>Sign-in</h2>
            <form>
                <p className="login__formName">email</p>
                <input type="Email" value={email} onChange={e => setEmail(e.value)}/>
                <p >password</p>
                <input type="password" value={password} onChange={e => setPassword(e.value)}/>
                
                <button className="login__signInButton">Sign In</button>

                <button className="login__registerButton">Register an Account</button>
            </form>
         </div>
        </div>
        </div>
    )
}

export default Login
