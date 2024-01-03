import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

function Layout() {
  return (
    <div className="h-[100vh] flex flex-col">
      <Header />
      <div className="max-h[90%] flex-1 bg-pattern overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
