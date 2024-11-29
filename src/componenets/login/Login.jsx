import { useState } from "react"
import "./login.css"

const Login = () => {
    const [avatar,setAvatar] = useState({
        file:null,
        url:""
    })

    const handleAvatar = e =>{
        if(e.target.files[0]){
            setAvatar({
                file:e.target.files[0],
                url:URL.createObjectURL(e.target.files[0])
            })
        }
    }

    return(
        <div className="login">
                <div className="item">
                    <h2>Welcome back</h2>
                    <form action="">
                        <label htmlFor="file"> 
                            <img src={avatar.url || "./avatar.png"} alt="" />
                            Change profile
                        </label>
                        <input type="text" placeholder="email" name="email"/>
                        <input type="password" placeholder="password" name="password" />
                        <button>Login</button>
                    </form>
                </div>
                <div className="separator"></div>
                <div className="item">
                    <h2>Create an Account</h2>
                    <form action="">
                        <label htmlFor="file"> 
                            <img src={avatar.url || "./avatar.png"} alt="" />
                            Upload an image
                        </label>
                        <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar} />  
                        <input type="text" placeholder="Username"/>
                        <input type="text" placeholder="email"/>
                        <input type="password" placeholder="Password"/>
                        <button>Sign up</button>
                    </form>
                </div>
        </div>
    )
}

export default Login