import React from "react";
import { motion } from "framer-motion";
const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -5,
    },
  },
};

const itemsVariants = {
  open: {
    x: 0,
    opacity: 1,
  },

  closed: {
    x: -200,
    opacity: 0,
  },
};

const Links = () => {
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemsVariants}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
