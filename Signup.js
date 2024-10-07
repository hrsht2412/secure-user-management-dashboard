import React from "react";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSignup } from "./utils/SignupSlice";
import { useEffect } from 'react';

export default function SignupComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const state = useSelector((state) => state.signup);

  useEffect(() => {
    if (state.data?.id) {
      setMessage("Your signup is successful");
    } else if (state.data?.error) {
      setMessage("Your signup failed");
    } else {
      setMessage("");
    }
  }, [state.data]);

  let item = {
    email,
    password,
  };

  return (
    <div className="container mx-auto px-4 py-8"> {/* Main container */}
      <h2 className="text-3xl font-bold mb-8">SignUp</h2> {/* Heading */}

      <div className="grid grid-cols-1 gap-4"> {/* Grid for form fields */}
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
          <input
            type="text"
            placeholder="fname"
            required
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="w-full focus:outline-none focus:border-blue-500"
          />
          <CiUser className="ml-2 text-gray-500" />
        </div>

        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
          <input
            type="text"
            placeholder="lname"
            required
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="w-full focus:outline-none focus:border-blue-500"
          />
          <CiUser className="ml-2 text-gray-500" />
        </div>

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
      </div>

      <button
        onClick={async () => dispatch(fetchSignup(item))}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 p-2,m-2"
      >
        Signup
      </button>
      <br />
      {message}
    </div>
  );
}