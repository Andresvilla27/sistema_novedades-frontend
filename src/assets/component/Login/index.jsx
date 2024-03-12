/* eslint-disable react/prop-types */
import axios from 'axios';
import {  useState } from 'react';
import './index.css';
/* import {storage} from '../../../firebase'; */



function Login ({setUser}) {
  const [username, setUsername] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [user, SetUSer] = useState('')
  const [password, setPassword] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState('');

  
  /* const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      const storageRef = storage.ref();
      const imageRef = storageRef.child('img/logo-policia.png'); // Ruta de la imagen en Firebase Storage
      try {
        const url = await imageRef.getDownloadURL();
        setImageUrl(url);
      } catch (error) {
        console.log('Error al obtener la URL de la imagen:', error);
      }
    };

    fetchImage();
  }, []);
   */

  
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
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
            </div>
            <img src='https://firebasestorage.googleapis.com/v0/b/novedades-policia.appspot.com/o/img%2Flogo-policia.png?alt=media&token=7e057113-a691-457e-ab1a-35c930f84857' className='image' alt="logo-policia" />
            {/* <img src='src/assets/img/logo-policia.png' className="image" alt="logo-policia" /> */}
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Already have an account?</h3>
              <p></p>
              <button className="btn transparent" id="sign-in-btn"> Login </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;