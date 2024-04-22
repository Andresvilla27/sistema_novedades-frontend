/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState } from 'react';
import './index.css';



function Login({  setUser }) {
  const [username, setUsername] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [password, setPassword] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('');
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (username === '' || password === ''){
        setError('Por favor, complete ambos campos')
        return;
      }
      const response = await axios.post('http://localhost:8000/login/'/* 'https://sistema-novedades-backend.onrender.com/login' */, {
        username,
        password
      });
      setUser(response.data.user) 
      console.log(response.data.username);
      setError('')
      } catch (error) {
      setError('Invalid username or password');
      alert('Usuario o Password incorrectas')
    }
  };
    
  return (
    <>

        <div className="container">
          <div className="forms-container">
            <div className="signin-signup">
              <form onSubmit={handleSubmit} className="sign-in-form">
                {error && <p className='error-msg'>{error}</p>}
                <h2 className="title">Login</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    name='username' />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name='password' />
                </div>
                <input type="submit" value="Iniciar Sesion" className="btn" />
              </form>
            </div>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
              </div>
              <img src='https://firebasestorage.googleapis.com/v0/b/novedades-prevencion.appspot.com/o/img_logo%2Flogo-policia.png?alt=media&token=e6707323-e4e0-4e90-b97a-f521f02a3910' className='image' alt="logo-policia" />
            </div>
          </div>
        </div>
    </>
  )
}

export default Login;