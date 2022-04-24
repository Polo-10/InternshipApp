import React from "react";
import { useOutletContext } from "react-router-dom";

import AnimationPages from "../components/AnimationPages";

import "../style/Profile.css";

const Profile = () => {
  const setTitle = useOutletContext();
  React.useEffect(() => {
    setTitle("Profil");
  }, []);

  return (
    <AnimationPages>
      <div className="wrapper-profile">
        <div className="profile">Twój Profil</div>
      </div>
    </AnimationPages>
  );
};

export default Profile;
