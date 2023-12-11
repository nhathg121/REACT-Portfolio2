import "./services.sass";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div className="services">
      {/* Text Container */}
      <motion.div className="textContainer">
        <p>
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      {/* Title Container */}
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Unique </b>
            Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your </b>
            Bussiness
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      {/* List Container */}
      <motion.div className="listContainer">
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
