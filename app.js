import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import LoginComponent from "./LoginComponent";
import Dashboard from "./Dashboard";
import ProtectedRoute from './ProtectedRoute';
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import SignupComponent from "./Signup";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Welcome to the Website</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">
        <Link to="/Login">Proceed</Link>
      </button>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <LoginComponent />,
  },
  {
    path: "/Signup",
    element: <SignupComponent />,
  },
  {
    path: "/Dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={AppStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);