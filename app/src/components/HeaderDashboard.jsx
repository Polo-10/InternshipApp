import React from "react";
import { useNavigate } from "react-router-dom";

import "../style/HeaderDashboard.css";

const HeaderDashboard = ({ title }) => {
  let navigate = useNavigate();
  const handleNavigateProfile = () => {
    navigate("/app/profile");
  };

  return (
    <div className="header-dashboard">
      <div className="header-title">
        <p className="title">{title}</p>
      </div>

      <div onClick={handleNavigateProfile} className="header-content">
        <div className="circle"></div>
        <div className="header-info">
          <p>Robert G.</p>
          <p className="name">Nazwa Firmy</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;
