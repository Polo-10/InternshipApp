import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import "../style/navbar.css";

import LogoDashboard from "../img/LogoDashboard.png";
import dashboard from "../img/dashboard.png";
import messages from "../img/messages.png";
import animalCards from "../img/animalCards.png";
import volunteering from "../img/volunteering.png";
import logOut from "../img/logOut.png";

const NavLink = ({ href, children, onClick }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = location.pathname === href;

  const handleNavigate = () => navigate(href);

  return (
    <li
      className={`list-item  ${isActive ? "active" : ""}`}
      onClick={onClick || handleNavigate}
    >
      {children}
    </li>
  );
};

const Navbar = () => {
  const { setUser } = useAuth();
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className="navbar">
      <img className="Logo" src={LogoDashboard} alt="" />
      <hr />
      <ul className="list">
        <div>
          <NavLink href="/app">
            <img src={dashboard} alt="" /> Dashboard
          </NavLink>

          <NavLink href="/app/messages">
            <img src={messages} alt="" />
            Wiadomości
          </NavLink>
          <NavLink href="/app/animalCards">
            <img src={animalCards} alt="" />
            Karty Zwierząt
          </NavLink>
          <NavLink href="/app/volunteering">
            <img src={volunteering} alt="" />
            Wolontariat
          </NavLink>
        </div>
        <NavLink href="/" onClick={handleLogout}>
          <img src={logOut} alt="" />
          Wyloguj się
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
