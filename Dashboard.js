import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeToken } from './utils/LoginSlice';

export default function Dashboard() {
  const token = useSelector((state) => state.login.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("enetuejdsk");
  
  const handleLogout = () => {
    dispatch(removeToken()); 
    navigate("/Login"); 
  };
  if (!token) {
    return <p>No token found. Please log in.</p>;
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Token: {token}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
