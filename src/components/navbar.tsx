import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";


export const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <nav className="navbar-container">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" className="navbar-link">
            Login
          </Link>
        </li>
      </ul>

      <div className="user-profile">
        {user && (
          <>
            <p className="user-email">Your email: {user?.email}</p>
            <img
              className="user-photo"
              src={user?.photoURL || ""}
              alt="user photo"
              width="100"
              height="100"
            />
            <button className="logout-button" onClick={signUserOut}>
              Log Out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
