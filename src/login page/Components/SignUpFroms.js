import React, { useState } from 'react';
import {Form,Button,Card, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { database } from '../AuthContent';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
function SignUp(){
 
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const errorNote = document.querySelector("#msg");
    const history = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        setEmail(e.target.formBasicEmail.value);
        setPassword(e.target.formBasicPassword.value);
        console.log(email +" "+password);
        
        createUserWithEmailAndPassword(database, email, password)
        .then((userCredential) => {
            // Signed in 
            console.log("1233");
            const user = userCredential.user;
            console.log(user);
            alert("sign up success");
            history('/login');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            errorNote.innerHTML = errorMessage;
        });
    }

    return(
        <>
        <Card>
            <Card.Body>
                <h3>Sign Up</h3>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={(e)=>{handleSubmit(e)}}>
                    <Form.Group name="email" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value="2@2.com"  />
                    </Form.Group>

                    <Form.Group name="password" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" value="123456" />
                    </Form.Group>

                    <Button className = "w-10"variant="secondary" type="submit">
                       Sign Up
                    </Button>
                </Form>
                <p id="msg" style={{color: "red"}}></p>
            </Card.Body>
        </Card>
        <div className = "w-100 text-right mt-2">
            Already have an account? <Link to="/login">Log In</Link>
        </div>
        </>
    )
    
    
}

export default SignUp;