
=======
/* eslint-disable no-unused-vars */
import React, { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { LoginOutlined } from "@mui/icons-material";
import { signOut } from "firebase/auth";
import './App.css'


const loadHome = () => import("./pages/Home");
const loadNav = () => import("./components/Navbar");
const loadTopbar = () => import("./components/Topbar");
const loadLogin = () => import("./pages/Login");

// eslint-disable-next-line react/prop-types, no-unused-vars




const Home = React.lazy(() => loadHome());
const Topbar = React.lazy(() => loadNav());
const Navbar = React.lazy(() => loadTopbar());
const Login = React.lazy(() => loadLogin());



function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        // Redirect to the main content or dashboard
        navigate('/'); // Update the path accordingly
      } else {
        setCurrentUser(null);
      }
    });
  
    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = (e) => {
    e.preventDefault()
    // if (window.confirm("Are you sure you want to log out?")) {
    signOut(auth)
      .then(() => {
        // Redirect to login page after logout
        navigate('/login')
      })
      .catch((error) => {
        console.error("Logout error:", error.message);
      });
    // }
  };
  return (

    <div>
      <Suspense fallback={<div>Loading...</div>}>
          {" "}
          <Topbar /> 
          {/* <Navbar /> */}
          {currentUser? (
            <>
             <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          </Routes>
            </>
          ):<Login/>}
         
        {/* <CallbackComponent /> */}
        {/* <ExpensiveCalculationComponent/> */}
      </Suspense>
    </div>
  );
}
const StyledDiv = styled.div`
  padding: 0 20px;
  background-color: #fafafa;
  display: flex;
  padding-bottom: 39px;
  flex-direction: column;
  @media (max-width: 991px) {
    padding: 0;
  }
`;

const Div = styled.h2`
  color: var(--red, #000);
  font: 700 20px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Top = styled.h2`
  color: var(--red, #000);
  align-self: stretch;
  margin-top: 37px;
  white-space: nowrap;
  font: 700 20px Inter, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export default App;
