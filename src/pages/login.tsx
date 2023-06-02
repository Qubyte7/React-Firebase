import {auth,provider}from '../config/firebase'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from "react-router-dom"


export const Login = ()=>{
    const navigate = useNavigate();
    const signinWithGoogle = async() =>{
    const result =await signInWithPopup(auth,provider);
    console.log(result);
    navigate("/")
    }
    
    return (
        <div>
            <h5>LOGIN  PAGE</h5>
            <p>Sign in with google to continue</p>
            <button onClick={signinWithGoogle}>Sign In with Google</button>
        </div>
    )
}