import React from "react";
//
function LoginPage(){
    
    return (
     <div>
        <form>
            <h3>Welcome!</h3>
            <label>UserName</label>
            <input name="userName" type="text" placeholder="insert user name here"></input>
            <br />
            <label>Password</label>
            <input name="password" type = "text" placeholder = "insert password here"></input>
        </form>
     </div>    
    )};


export default LoginPage();