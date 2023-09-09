import React from 'react';
import UserLogin from './Components/LoginFroms';
import {Container} from 'react-bootstrap'
import SignUp from './Components/SignUpFroms';

function TestPage(){
    return(
        <Container class="d-flex align-items-center justify-content-center">
        <div >
        <UserLogin />
        <SignUp />
        </div>
      </Container>
    );
}
export default TestPage;