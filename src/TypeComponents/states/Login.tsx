import React, { useState } from 'react'

type LoginProp = {
    isLogin: boolean;
    handleLogin: ()=> void
    handleLogout: () => void
}
const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
   const handleLogin =() =>{
    setIsLoggedIn(true)
    alert("Welcome friend👋👋😊")
   };
   const handleLogout =() => {
    setIsLoggedIn(false)
   };

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
       <h2>
        {isLoggedIn ? "Welcome User": "Login"}
       </h2>
    </div>
  )
}

export default LoggedIn