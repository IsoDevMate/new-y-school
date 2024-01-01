/* eslint-disable no-unused-vars */
import React, { Suspense, useCallback, useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";



const loadHome = () => import("./pages/Home");
const loadNav = () => import("./components/Navbar");
const loadTopbar = () => import("./components/Topbar");

// eslint-disable-next-line react/prop-types, no-unused-vars




const Home = React.lazy(() => loadHome());
const Topbar = React.lazy(() => loadNav());
const Navbar = React.lazy(() => loadTopbar());

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          {" "}
          <Topbar /> 
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        {/* <CallbackComponent /> */}
        {/* <ExpensiveCalculationComponent/> */}
      </Suspense>
    </div>
  );
}

export default App;
