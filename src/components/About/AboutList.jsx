import React from "react";
//import "./about.css";
//import { Container, Row, Col } from "reactstrap";
//import aboutImg from "../../Assests/image";
//import CountUp from "react-countup";
//import "./about.css";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div
    className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
    style={{
      backgroundImage:
        
        
        
        "url(https://www.dontwasteyourmoney.com/wp-content/uploads/2020/12/the-best-tie-dye-shirt-scaled.jpeg)",
    }}
  >
    <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
      <h1
        className={`text-[35px] leading-[1.2] 800px:text-[22px] text-[#232d6e] font-[900] capitalize`}
      >
        Tie dye is a technique for dying natural fabrics that results in interesting, colorful patterns. The technique involves crumpling, pleating or folding the fabric into various patterns, then tying it with string, which is what gives it its name. The tied fabric is dipped into vats of dye, then wrung out and rinsed. <br /> Tie-dyeing, method of dyeing by hand in which coloured patterns are produced in the fabric by gathering together many small portions of material and tying them tightly with string before immersing the cloth in the dyebath. The dye fails to penetrate the tied sections.
      </h1>
      
      <p className="pt-5 text-[16px] font-[Poppins] font-[600] text-[#500202ba]">
      If a piece of cloth or a garment is tie-dyed, 
      it is tied in knots and then put into dye, <br/>so that some parts
       become more deeply coloured than others. A tie-dye is a <br/>
       garment or piece of cloth that has been tie-dyed..!
      </p>
      <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
               
               <span className="text-[#fff] font-[Poppins] font-[800] text-[18px]">
                  Our Store
               </span>
          </div>
      </Link>
    </div>
  </div>
  );
};

export default AboutUs;
