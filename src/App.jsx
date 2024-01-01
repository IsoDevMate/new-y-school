/* eslint-disable no-unused-vars */
import React, { Suspense, useCallback, useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Topbar from "./Componenents/Topbar";
import Navbar from "./Componenents/Navbar";

const loadHome = () => import("./pages/Home");
// eslint-disable-next-line react/prop-types, no-unused-vars




const Home = React.lazy(() => loadHome());

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
