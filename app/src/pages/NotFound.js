import { useNavigate } from "react-router-dom";

import AnimationPages from "../components/AnimationPages";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/app");
  };

  const ButtonVariants = {
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
    <AnimationPages exitBeforeEnter>
      <div>
        <motion.div variants={ButtonVariants} transition={{ delay: 1 }}>
          <button
            onClick={backHome}
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "344px",
              height: "56px",
              background: "#43be8d",
              borderRadius: "10px",
              color: "#ffffff",
              fontSize: "16px",
              textTransform: "uppercase",
              border: "none",
              cursor: "pointer",
              boxShadow: "0px 0px 29px rgba(0, 0, 0, 0.15)",
              margin: "40px",
            }}
          >
            GO HOME
          </button>
        </motion.div>
        <iframe
          title="404"
          src="https://gifer.com/embed/1FA"
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-1",
          }}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </AnimationPages>
  );
};

export default NotFound;
