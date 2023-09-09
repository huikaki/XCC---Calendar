import React from 'react';
import {Form,Button,Card} from 'react-bootstrap';
import { useRef } from 'react';

function UserLogin(){
    const userEmail = useRef();
    const passWord = useRef();
    return (
     <div>
        <Form>
            <h3>Welcome!</h3>
            <Form.Group id="userName">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={userEmail}/>
            </Form.Group>
            <Form.Group id="passWord">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter " ref={passWord}/>
            </Form.Group>
        </Form>
     </div>    
    )};

export default UserLogin;