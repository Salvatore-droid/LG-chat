import { useState } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./login.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../../lib/firebase"
import { doc, setDoc } from "firebase/firestore"
import upload from "../../lib/upload"


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

    const [loading, setLoading] = useState(false);

    const handleLogin = async(e) =>{
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);

        const {email, password} = Object.fromEntries(formData);

        try{
            
            await signInWithEmailAndPassword(auth, email, password)


            toast.success("you are logged in!!")
        }catch(err){
            console.log(err)
            toast.error(err.message)
        }finally{
            setLoading(false);
        }
    }

    const handleRegister = async (e) =>{
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);

        const {username, email, password} = Object.fromEntries(formData);

        try{
            
            const res = await createUserWithEmailAndPassword(auth, email, password)

            const imageURL = await upload(avatar.file);

            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                avatar: imageURL,
                id: res.user.uid,
                blocked: []
            });

            await setDoc(doc(db, "userchats", res.user.uid), {
                chats: [],
            });

            toast.success("Account created successfully! you are now able to login")
        }catch(err){
            console.log(err)
            toast.error(err.message)
        }finally{
            setLoading(false);
        }
        
    };

    return(
        <div className="login">
                <div className="item">
                    <h2>Welcome back</h2>
                    <form action="" onSubmit={handleLogin}>
                        <input type="text" placeholder="email" name="email"/>
                        <input type="password" placeholder="password" name="password" />
                        <button disabled={loading}>{loading ? "loading" : "Login"}</button>
                    </form>
                </div>
                <div className="separator"></div>
                <div className="item">
                    <h2>Create an Account</h2>
                    <form onSubmit={handleRegister}>
                        <label htmlFor="file"> 
                            <img src={avatar.url || "./avatar.png"} alt="" />
                            Upload an image
                        </label>
                        <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>  
                        <input type="text" placeholder="Username" name="username"/>
                        <input type="text" placeholder="email" name="email"/>
                        <input type="password" placeholder="Password" name="password"/>
                        <button disabled={loading}>{loading ? "loading" : "Sign up"}</button>
                    </form>
                </div>
        </div>
    )
}

export default Login