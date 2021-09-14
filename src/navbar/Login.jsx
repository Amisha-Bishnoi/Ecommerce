import React , {useState} from 'react';
import './signup.css';
import {Link , Redirect} from 'react-router-dom';
import Footer from './Footer'


const Login = () => {
    
    const [user, setuser] = useState({
        email:'',
        password:'',
    });
    const inputEvent = (event) => {
        const {name,value} = event.target;
        setuser((prevalue) => {
            return {
                ...prevalue,
                [name] : value,
        } })
    };
    const check = () => {
        var storedEmail = localStorage.getItem('email');
        var storedPwd = localStorage.getItem('pwd');
        console.log(storedEmail);
        console.log(storedPwd);
        if(user.email === storedEmail && user.password === storedPwd){
          alert("Logged In");
        }else{
            alert('Error in login');
        }
    }
    return (
        <div>
            <div className="form-box">
                <h2 className="heading">Login</h2>
                <p className="para">Login to make a purchase!</p>
                <form onSubmit={check}>
                    <div className="form-elements">
                        <input className="form-item" type="email" id="mail" placeholder="Email" name="email" onChange={inputEvent}  required/>
                        <input className="form-item" type="password" placeholder="Password" name="password" onChange={inputEvent} required />   
                        <button className="button" type = "submit">Login</button>
                    </div>
                    <p className="para-register">Don't have an account?<Link to="/SignUp" className="redirect-link">Register</Link></p>
                </form>
            </div>
            
            <Footer />
        </div>
    )
}

export default Login;
