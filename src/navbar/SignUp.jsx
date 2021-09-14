import React ,{useState} from 'react';
import './signup.css';
import Footer from './Footer';
import { Link } from "react-router-dom";


const SignUp = () => {

    const [userdata, setuserdata] = useState({
        username:'',
        email:'',
        password:'',
        confpassword:'',
    });
    const inputEvent=(event) => {
         
        const {name , value} = event.target;
        setuserdata((prevalue)=> {
            return {
                ...prevalue,
                [name] : value,
            };
        });
      
    }
    const submitevent = (event) => {
        event.preventDefault();
        if(userdata.password===userdata.confpassword){
            localStorage.setItem('name' , userdata.username);
            localStorage.setItem('email' , userdata.email);
            localStorage.setItem('pwd' , userdata.password);

            alert("submitted");
        }
        else{
            alert("Password doesn't match");
        }
          
    }
return (
        <div>
            <div className="form-box">
                <h2 className="heading">Register</h2>
                
                <form onSubmit={submitevent}>
                    <div className="form-elements">
                        <input className="form-item" type= "text" placeholder="Username" name="username" onChange={inputEvent} required />
                        <input className="form-item" type= "email" placeholder="Email" name="email" onChange={inputEvent} required />
                        <input className="form-item" type= "password" placeholder="Password" name="password" onChange={inputEvent} required />
                        <input className="form-item" type= "password" placeholder="Confirm Password" name="confpassword" onChange={inputEvent} required />
        
                        <div className="button-group">
                            <button className="button" type = "submit">Register</button>
                            <button className="button" type = "reset">Reset</button>
                        </div>
                    </div>
                    <p className="para-register">Already have an account?<Link to="/Login" className="redirect-link">Login</Link></p>
                </form> 
            </div>
       
            <Footer />
        </div>
    )
}

export default SignUp;
