import React from "react";
import { useOutletContext } from "react-router-dom";

import AnimationPages from "../components/AnimationPages";

import "../style/Messages.css";

const Messages = () => {
  const setTitle = useOutletContext();

  React.useEffect(() => {
    setTitle("Wiadomości");
  }, []);
  return (
    <AnimationPages>
      <div className="wrapper-messages">
        <div
          className="wrapper-messages-scroll"
          style={{ overflowY: "scroll" }}
        >
          <div className="messages">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            recusandae vero pariatur provident laboriosam cupiditate, nihil
            dolore quis assumenda accusantium! Tenetur voluptate dolorem
            explicabo esse? Quis, aspernatur! Cupiditate, hic sunt.
          </div>
          <div className="messages">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            recusandae vero pariatur provident laboriosam cupiditate, nihil
            dolore quis assumenda accusantium! Tenetur voluptate dolorem
            explicabo esse? Quis, aspernatur! Cupiditate, hic sunt.
          </div>
          <div className="messages">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            recusandae vero pariatur provident laboriosam cupiditate, nihil
            dolore quis assumenda accusantium! Tenetur voluptate dolorem
            explicabo esse? Quis, aspernatur! Cupiditate, hic sunt.
          </div>
          <div className="messages">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            recusandae vero pariatur provident laboriosam cupiditate, nihil
            dolore quis assumenda accusantium! Tenetur voluptate dolorem
            explicabo esse? Quis, aspernatur! Cupiditate, hic sunt.
          </div>
          <div className="messages">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            recusandae vero pariatur provident laboriosam cupiditate, nihil
            dolore quis assumenda accusantium! Tenetur voluptate dolorem
            explicabo esse? Quis, aspernatur! Cupiditate, hic sunt.
          </div>
          <div className="messages">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            recusandae vero pariatur provident laboriosam cupiditate, nihil
            dolore quis assumenda accusantium! Tenetur voluptate dolorem
            explicabo esse? Quis, aspernatur! Cupiditate, hic sunt.
          </div>
          <div className="messages">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            recusandae vero pariatur provident laboriosam cupiditate, nihil
            dolore quis assumenda accusantium! Tenetur voluptate dolorem
            explicabo esse? Quis, aspernatur! Cupiditate, hic sunt.
          </div>
          <div className="messages">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            recusandae vero pariatur provident laboriosam cupiditate, nihil
            dolore quis assumenda accusantium! Tenetur voluptate dolorem
            explicabo esse? Quis, aspernatur! Cupiditate, hic sunt.
          </div>
          <div className="messages">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            recusandae vero pariatur provident laboriosam cupiditate, nihil
            dolore quis assumenda accusantium! Tenetur voluptate dolorem
            explicabo esse? Quis, aspernatur! Cupiditate, hic sunt.
          </div>
          <div className="messages">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            recusandae vero pariatur provident laboriosam cupiditate, nihil
            dolore quis assumenda accusantium! Tenetur voluptate dolorem
            explicabo esse? Quis, aspernatur! Cupiditate, hic sunt.
          </div>
          <div className="messages">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            recusandae vero pariatur provident laboriosam cupiditate, nihil
            dolore quis assumenda accusantium! Tenetur voluptate dolorem
            explicabo esse? Quis, aspernatur! Cupiditate, hic sunt.
          </div>
          <div className="messages">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            recusandae vero pariatur provident laboriosam cupiditate, nihil
            dolore quis assumenda accusantium! Tenetur voluptate dolorem
            explicabo esse? Quis, aspernatur! Cupiditate, hic sunt.
          </div>
          <div className="messages">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            recusandae vero pariatur provident laboriosam cupiditate, nihil
            dolore quis assumenda accusantium! Tenetur voluptate dolorem
            explicabo esse? Quis, aspernatur! Cupiditate, hic sunt.
          </div>
          <div className="messages">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            recusandae vero pariatur provident laboriosam cupiditate, nihil
            dolore quis assumenda accusantium! Tenetur voluptate dolorem
            explicabo esse? Quis, aspernatur! Cupiditate, hic sunt.
          </div>
        </div>
      </div>
    </AnimationPages>
  );
};

export default Messages;
