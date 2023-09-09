import React from 'react';
import { useRef } from 'react';
import {Form,Button,Card} from 'react-bootstrap';

function SignUp(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    return(
        <>
        <Card>
            <Card.Body>
                <h3>Sign Up</h3>
                <Form>
                <Form.Group id="email" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                    </Form.Group>

                    <Form.Group id="passWord" className="" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" ref={passwordRef}/>
                    </Form.Group>

                    <Form.Group id="confirmPassword"className="" controlId="formBasicPassword">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password Confirmation" ref={passwordConfirmRef} required />
                    </Form.Group>

                    <Button className = "w-10"variant="secondary" type="submit">
                       Sign Up
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <div className = "w-100 text-right mt-2">
            Already have an account? Log In
        </div>
        </>
    )
    
    
}

export default SignUp;