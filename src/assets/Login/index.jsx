import axios from "axios";
import { useState } from "react";



const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:8000/login/', {email, password}).then(res => console.log(res)).catch(err => console.log(err));
    }


return(

    <>
        <div className="d-flex justify-content-center align-item-center bg-primary">
            <div className="p-3 bg-white w-25">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <button className="btn btn-succes">Login</button>
                </form>
            </div>
        </div>
    </>
)
}

export default Login;