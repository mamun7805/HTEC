import React, {useState} from 'react';
import {Redirect } from 'react-router-dom';



function Signin(){
    const [email, setEmail] =  useState("");
    const [password, setPassword] = useState(""); 
    const [islogin, setIslogin] = useState(false);
    
    const loginSubmit = (e)=> {
        e.preventDefault();
        if(email === "a" && password === "b"){
            setIslogin(true)
            const token = localStorage.setItem('token', "dldfldfldfdfdfdfdfdf");
            if(token === null){
            setIslogin(false);
            }
        }
        console.log(email);
        console.log(password)
    }
    if(islogin === true){
        return <Redirect to = "/dashboard" />
    }

    return(
        <>
        <div className = "jumbotron m-0">
                <div className = "row">
                    <div className = "col-md-4"></div>
                    <div className = "col-md-4">
                    <div className = "p-3 bg-dark"  >
                        
                    </div>
                        <div className = "container bg-white p-5 shadow-sm">
                            <form onSubmit = {loginSubmit}>
                                <label> Email </label>
                                <input 
                                    type = "text"
                                    className = "form-control"
                                    name = "email"
                                    onChange = {(e)=> setEmail(e.target.value)}
                                />
                                <label> password </label>
                                <input 
                                    type = "password"
                                    className = "form-control"
                                    name = "password"
                                    onChange = {(e)=> setPassword(e.target.value)}
                                />
                                <hr/>
                                <button className = "btn text-white bg-dark " > Login </button>
                                <br/>
            
                            </form>
                        </div>
                    </div>
                <div className = "col-md-4"></div>
                </div>
        </div>  
        <div className = "p-5 bg-dark "  >
        </div>



        </>

    )
}
export default Signin;