import React from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <>
      <div className="flex h-screen w-screen ">
        <>
          <Navigation></Navigation>
        </>
        <div className="flex-1 ">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
