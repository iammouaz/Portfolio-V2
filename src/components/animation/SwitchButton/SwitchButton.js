import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

export default function SwitchButton({ setStyle, style }) {
  const currentStyle = localStorage.getItem("style");

  const toggleSwitch = () => {
    setStyle(!style)
    localStorage.setItem("style", !style);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="switch d-flex"
        data-isOn={style}
        onClick={toggleSwitch}
      >
        <motion.div className="handle" layout transition={spring} />
      </div>
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
