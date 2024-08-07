import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const { showAlert } = props;
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
            showAlert("Logged  Successfully", 'success');
            navigate("/")
        }else{
            showAlert("Invalid Details",'danger');
        }
    }
    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value })
    }
  return (
    <div>
        <h3>Login to continue to iNotebook</h3>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name='email' aria-describedby="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name='password' />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Login
