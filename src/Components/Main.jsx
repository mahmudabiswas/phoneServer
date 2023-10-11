import React from "react";
import { Outlet } from "react-router-dom";
import Phone from "./Phone";
import Header from "./Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
