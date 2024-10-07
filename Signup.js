import React from "react";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSignup } from "./utils/SignupSlice";


export default function SignupComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  
 const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.signup;
  });
  
  console.log("state", state);
  //console.log("Your signup data is:", state.data.id);
  

  let item = {
    email,
    password,
  };

  return (
    <div>
      <h2 className="w-30">SignUp</h2>
      <div>
        <input
          type="text"
          placeholder="fname"
          required
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />

        <CiUser />
      </div>
      <div>
        <input
          type="text"
          placeholder="lname"
          required
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />

        <CiUser />
      </div>
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
        onClick={() => {
          {
            dispatch(fetchSignup(item));
          }
        }}
      >
        Signup

      </button>
      {state.data&&<p>Your SignUp is successful</p>}
    </div>

  );
}
