import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({email:"email",password:"password"});
    const navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers:{
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ email:credentials.email, password:credentials.password }),
        })
        const json = await response.json();
        if(json.success){
            // save the auth token and redirect
            localStorage.setItem('token',json.authToken);
            navigate("/")
        }else{
            alert("Invailid credentials");
        }
    }
    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name='email' aria-describedby="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name='password' />
            </div>
            <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Login