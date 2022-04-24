import React from "react";
import { useOutletContext } from "react-router-dom";

import MainDashboard from "../components/MainDashboard";

const DashBoard = () => {
  const setTitle = useOutletContext();

  React.useEffect(() => {
    setTitle("Dashboard");
  }, []);

  return <MainDashboard />;
};

export default DashBoard;
