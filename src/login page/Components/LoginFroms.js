import React from 'react';
import {Form,Button,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { database } from '../AuthContent';
import { useNavigate } from 'react-router-dom';

function LoginFroms(){
    const history = useNavigate();

    const handleSubmit= (e) =>{
        e.preventDefault();
        const email = e.target.userName.value;
        const password = e.target.password.value;

    signInWithEmailAndPassword(database, email, password)
    .then((userCredential) => {
        // Signed in 
        
        const user = userCredential.user;
        console.log("user login");
        history('/Sign Up');

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
    });
    
}

    return (
     <div>
        <Card>
            <Card.Body>
            <Form onSubmit={(e)=>{handleSubmit(e)}}>
                    <h3>Welcome!</h3>
                    <Form.Group id="userName" controlId='userName'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group id="passWord" controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter "/>
                    </Form.Group>
                    
                    <Button className = "w-10"variant="secondary" type="submit">
                            Login
                    </Button>
                    <div className = "w-100 text-right mt-2">
                            No have an account? <Link to="/SignUp">Sign Up</Link>
                    </div>
                </Form>
            </Card.Body>
        </Card>
     </div>    
    )};

export default LoginFroms;