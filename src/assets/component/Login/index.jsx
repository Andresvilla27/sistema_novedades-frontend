/* eslint-disable react/prop-types */
import axios from 'axios'
import { useState } from 'react';
import './index.css';



function Login ({setUser}) {
  const [username, setUsername] = useState('');
  const [user, SetUSer] = useState('')
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', {
        username,
        password,
        user
      });
      if(username === '' || password === ''){
        setError(true)
        return
      }
      setError(false)
      setUser([user])
      console.log(response.data.user);
    } catch (error) {
      setError('Invalid username or password');
    }
  };
  

  return (
    <>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={handleSubmit} className="sign-in-form">
              <h2 className="title">Login</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input 
                type="text" 
                placeholder="Username" 
                required 
                value={username} 
                onChange={(e)=>setUsername(e.target.value)} 
                name='username' />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input 
                type="password" 
                placeholder="Password" 
                required 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} 
                name='password' />
              </div>
              <input type="submit" value="Login" className="btn solid"/>
              {/* <p className="social-text">Or Login With</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a> 
              </div> */}
            </form>
            {/* <form action="#" className="sign-up-form">
              <h2 className="title">Register</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" required />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" required />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" required />
              </div>
              <input type="submit" className="btn" value="Register" />
              <p className="social-text">Or Register With</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form> */}
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              {/* <h3>No tienes una cuenta aun?</h3>
              <p></p>
              <button className="btn transparent" id="sign-up-btn"> Register </button> */}
            </div>
            <img src="src/assets/img/logo-policia.png" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Already have an account?</h3>
              <p></p>
              <button className="btn transparent" id="sign-in-btn"> Login </button>
            </div>
            {/* <img src="https://raw.githubusercontent.com/DzarelDeveloper/Img/main/Login.png" className="image" alt="" /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;