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
import { useEffect } from "react";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.login);

  let item = {
    email,
    password,
  };

  useEffect(() => {
    if (state.data?.error) {
      alert("Login failed");
    }
  }, [state.data]);

  const handleLogin = async () => {
    const resultAction = await dispatch(fetchLogin(item));
    console.log(resultAction, "resultAction");

    // If login is successful, set token and navigate
    if (resultAction.payload?.token) {
      dispatch(setToken(resultAction.payload.token));
      navigate("/Dashboard");
    } else {
      console.error("Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">Login</h2>
      <div className="w-full max-w-md flex flex-col space-y-4">
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
          <input
            type="text"
            placeholder="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full focus:outline-none focus:border-blue-500"
          />
          <CiUser className="ml-2 text-gray-500" />
        </div>

        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
          <input
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full focus:outline-none focus:border-blue-500"
          />
          <RiLockPasswordFill className="ml-2 text-gray-500" />
        </div>

        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
        >
          Login
        </button>
      </div>

      <p className="text-center mt-4">New User?</p>
      <button className="text-blue-500 hover:text-blue-700 underline">
        <Link to="/Signup">Sign up Here</Link>
      </button>
    </div>
  );
}