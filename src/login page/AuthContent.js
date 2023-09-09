import React, {useContext} from 'react';
import { useState } from 'react';
const AuthContent = React.createContxt()

export function useAuth(){
    return;
}
export function AuthProvider({Children}){
    const [userAuth,setUserAuth] = useState();
}