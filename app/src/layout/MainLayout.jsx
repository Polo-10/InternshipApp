import React from "react";
import { Outlet } from "react-router-dom";

import HeaderDashboard from "../components/HeaderDashboard";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const [title, setTitle] = React.useState("");

  return (
    <>
      <Navbar />
      <HeaderDashboard title={title} />
      <Outlet context={setTitle} />
    </>
  );
};

export default MainLayout;
