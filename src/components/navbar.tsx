import { Link } from "react-router-dom"
import {auth}from '../config/firebase'
//the auth give us an access to the user's  information that have logged in
import {useAuthState} from 'react-firebase-hooks/auth'
import {signOut} from 'firebase/auth'




export const Navbar = () =>{
    const [user , loading ,error] =useAuthState(auth)

      const signUserOut = async()=>{
      await signOut(auth);
      }






    return(
        <div>
            <Link to="/" style={{padding:12}}>Home</Link>
            <Link to="/login">Login</Link>

<div>
    {/* wihtout the help of useAuthStatenfrom the react-firebase-hooks
   <p>{auth.currentUser?.displayName} </p> 
   <p>Your email:{auth.currentUser?.email}</p>
    <img src={auth.currentUser?.photoURL || ""} alt="user photo" width="100" height="100" />  */}
         {/* USING UseAuthState  */}
         { user &&
        <>
         <p>Your email:{user?.email}</p>
    <img src={user?.photoURL || ""} alt="user photo" width="100" height="100" /> 
    <button onClick={signUserOut}>Log Out</button>
    </>
}
</div>

        </div>
    )
}