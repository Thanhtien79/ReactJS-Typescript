import { randomBytes } from "crypto"
import { useState } from "react"


export const LoggedIn =() =>{
    // isLoggedIn là biến trang thái useState tạo ra
    // setIsLoggedIn là hàm để thay đổi giá trị của biến trạng thái
    const [isLoggedIn,setIsLoggedIn] =  useState(false)
    const handleLogin =()=>{setIsLoggedIn (true)}
    
    const handleLogout =() => {setIsLoggedIn(false)}
    return(
        <div>
            <button onClick={handleLogin}>Login</button> 
                <button onClick={handleLogout}>Logout</button>
             <div> Useris {isLoggedIn ? 'login' : 'logout' } </div>
        </div>
    )
}