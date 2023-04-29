import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Life is like a tie-dye shirt; <br /> it may have flaws, but it's still beautiful.
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
        If a piece of cloth or a garment is tie-dyed, 
        it is tied in knots and then put into dye, <br/>so that some parts
         become more deeply coloured than others. A tie-dye is a <br/>
         garment or piece of cloth that has been tie-dyed.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Order Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

