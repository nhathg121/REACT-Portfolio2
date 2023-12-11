import "./services.sass";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      {/* Text Container */}
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      {/* Title Container */}
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }} variants={variants}>
              Unique{" "}
            </motion.b>
            Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }} variants={variants}>
              For Your{" "}
            </motion.b>
            Bussiness
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      {/* List Container */}
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2 className="title">Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam maxime
            ducimus in veritatis optio nesciunt laboriosam neque culpa harum
            obcaecati.
          </p>
          <button>Over View</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2 className="title">Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam maxime
            ducimus in veritatis optio nesciunt laboriosam neque culpa harum
            obcaecati.
          </p>
          <button>Over View</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2 className="title">Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam maxime
            ducimus in veritatis optio nesciunt laboriosam neque culpa harum
            obcaecati.
          </p>
          <button>Over View</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2 className="title">Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam maxime
            ducimus in veritatis optio nesciunt laboriosam neque culpa harum
            obcaecati.
          </p>
          {/* open link to new window button */}
          <button
            onClick={() => {
              window.location.href = "https://www.google.com";
            }}
            type="button"
          >
            Over View
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
