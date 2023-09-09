import React from 'react';
import UserLogin from './loginFroms';
import {Container} from 'react-bootstrap'
import SignUp from './signUp';

function TestPage(){
    return(
        <>
      <UserLogin />
      <SignUp />
      </>
    );
}
export default TestPage;