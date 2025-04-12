import React from "react";
import { Header, Footer } from "./components/index";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
