import React from "react";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchLogin } from "./utils/LoginSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setToken } from "./utils/LoginSlice";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => {
    return state.login;

  });
  let item = {
    email,
    password,
  };

  // console.log({username,password});     
  const handleLogin = async () => {
    const resultAction = await dispatch(fetchLogin(item));
    console.log(resultAction,'resultAction');

    // If login is successful, set token and navigate
    if (resultAction.payload?.token) {
      dispatch(setToken(resultAction.payload.token));
      navigate("/Dashboard");
    } else {
      console.error("Login failed");
    }
  };

  


  

  return (
    <div>
      <h2>Login</h2>
      <div>
        <input
          type="text"
          placeholder="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <CiUser />
      </div>

      <div>
        <input
          type="password"
          placeholder="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <RiLockPasswordFill />
      </div>
      
      <button
       onClick={handleLogin}
      >
      Login
      </button>
    
    <p>New User ??? </p>

      <button>
        <Link to="/Signup">Sign up Here</Link>
      </button>
    </div>
  );
}