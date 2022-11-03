import { useState, useEffect } from "react";
import logo from "./images/mkyclose.png"
import logo1 from "./images/mkyopen.png"
import { motion } from "framer-motion";

function Peekabo() {
  const [peek, setPeek] = useState(logo);

  const peekA = () => {
    setPeek(logo);
  };
  const peekB = () => {
    setPeek(logo1);
  };
  const [toggle, setToggle] = useState(false);

  function toggleFunction() {
    if (toggle) peekA();
    else peekB();
    setToggle(!toggle);
  }

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  return (
    <div
      className="pboo"
      id="pboo"
      style={{
        background: "linear-gradient(130deg,#1a2a6c,#b21f1f,#001510)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <div className="peekMain">
        <h1 className="booText">
          <center>Peek-Ka-boo!!</center>
        </h1>
        <center>
          <img src={peek} width={300} height={300} />
        </center>
        <center>
          <div className="switch" data-isOn={toggle} onClick={toggleFunction}>
            <motion.div className="handle" layout transition={spring} />
          </div>
        </center>
      </div>
    </div>
  );
};

export default Peekabo;
