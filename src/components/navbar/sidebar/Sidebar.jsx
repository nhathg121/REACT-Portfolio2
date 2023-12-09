import React from "react";
import { motion } from "framer-motion";
import Links from "./Links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import { useState } from "react";
import "./sidebar.sass";
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      trannsition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      trannsition: {
        delay: 0.5,
        type: "zoom",
        stiffness: 200,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} open={open} />
    </motion.div>
  );
};

export default Sidebar;
