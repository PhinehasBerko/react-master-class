import React, { useState } from 'react'

type AuthUser = {
    username: string;
    email : string;
}
const User = () => {
    const [user , setUser] = useState<AuthUser | null>(null);
// NB: in instants where you are sure the user state will not be null 
// type assertion can be used eg: useState<AuthUser>({} as AuthUser)
    const handleLogin = () =>{
        setUser(
            {
                username:"Phinehas",
                email: "phinehas@gmail.com"
            }
        )
    };
    const handleLogout =() =>{setUser(null)};
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <p>User's name is {user?.username}</p>
        <p>User's email is {user?.email}</p>
    </div>
  )
}

export default User