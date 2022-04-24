import React from "react";

import AnimationPages from "../components/AnimationPages";
import PetsCards from "./PetsCards";

import "../style/MainDashboard.css";

import { motion } from "framer-motion";

import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

const MainDashboard = () => {
  const [pets, setPets] = React.useState(undefined);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const override = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  React.useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5001/dogs")
        .then((res) => res.json())
        .then((res) => setPets(res))
        .catch((err) => setError(true))
        .finally(setLoading(false));
    }, 2000);
  }, []);

  const PetsCardsVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };
  return (
    <>
      <AnimationPages>
        <main className="main">
          <p className="main-title">Zwierzęta w schronisku</p>
          <div className="main-wrapper">
            {loading ? (
              <div>
                <PuffLoader
                  color={"#43be8d"}
                  loading={loading}
                  css={override}
                  size={200}
                />
              </div>
            ) : (
              pets &&
              pets.map((item) => (
                <motion.div
                  key={item.id}
                  variants={PetsCardsVariants}
                  transition={{ delay: Number(item.id) * 0.4 }}
                >
                  <PetsCards item={item} />
                </motion.div>
              ))
            )}
          </div>
        </main>
      </AnimationPages>
    </>
  );
};

export default MainDashboard;
