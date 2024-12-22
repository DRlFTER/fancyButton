import { motion } from "framer-motion";
import { useState } from "react";

export const FancyButtonOne = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col flex-1 w-1/3">
      <div className="my-2 py-3 px-5 rounded-3xl flex justify-center items-center bg-[#606B75]">
        <h3 className="text-third-title flex-1 pl-5 text-[#1B2224] font-semibold font-mono">
          Fancy button one
        </h3>
      </div>
      <div className="h-96 my-2 rounded-2xl bg-[#505C67] flex flex-col items-center justify-center overflow-hidden p-5">
        <div className="flex flex-col w-full h-full bg-[#2C3A47] rounded-xl p-3 gap-3 overflow-hidden justify-center items-center">
          <motion.div
            className="buttonContainer flex justify-center items-center w-60 h-28 relative z-10"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={
              isClicked
                ? { scale: 1 }
                : isHovered
                ? { scale: 1.1 }
                : { scale: 1 }
            }
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.button
              className="w-[80%] h-[70%] bg-gradient-to-br from-white/10 to-transparent backdrop-blur-lg rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] font-mono text-black text-third-title font-semibold z-50"
              onClick={() => setIsClicked(!isClicked)}
            >
              Button
            </motion.button>
            <motion.div
              className="w-[80%] h-[70%] bg-slate-300 absolute rounded-full z-40"
              initial={{ top: "1.5rem", rotate: 5 }}
              animate={
                isClicked
                  ? { top: "17px", rotate: 0 }
                  : isHovered
                  ? { rotate: 3 }
                  : { rotate: 0 }
              }
              whileHover={{ rotate: -3 }}
              transition={{ type: "spring", stiffness: 200 }}
            ></motion.div>
            <motion.div
              className="w-[80%] h-[70%] bg-slate-400 absolute rounded-full z-30"
              initial={{ top: "2rem", rotate: -5 }}
              animate={
                isClicked
                  ? { top: "17px", rotate: 0 }
                  : isHovered
                  ? { rotate: 5 }
                  : { rotate: 0 }
              }
              whileHover={{ rotate: -5 }}
              transition={{ type: "spring", stiffness: 100 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
