import { useState } from "react"
type AuthUser = {
    Name: string
    Email: string
}
export const User = ()=> {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)//useState<AuthUser | null>(null)
    const handleLogin =()=>{
        setUser({Name: 'Tien', Email:'TIen@example.com'})
    }
    // const handleLogout= ()=>{
    //     setUser(null)
    // }
    return (
       <div>
         <button onClick={handleLogin}>login</button>
        {/* <button onClick={handleLogout}>logout</button> */}
        {/* <div>user is {user?.Name}</div>
        <div>email {user?.Email}</div> */}
        <div>user is {user.Name}</div>
        <div>email {user.Email}</div>
       </div>

    )
}