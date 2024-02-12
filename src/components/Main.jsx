import React from "react";
import { FaAmazon } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";
const Main = () => {
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "40px",
        backgroundColor: "lightblue",
      }}
    >
      <div className="para" style={{ marginRight: "40px" }}>
        <div className="headingPara">
          <h1>
            COMFORT IS <br /> ALL YOU <br /> NEED
          </h1>
        </div>
        <div className="smallpara">
          <p>
            WE BUILD THE MOST COMFORTABLE <br /> SHOES IN THE MARKET SINCE{" "}
            <br />
            1988 IN 23 CONTRIES AND NOW <br /> AVAILBLE IN INDIA ALSO.
          </p>
        </div>
        <div
          className="buttons"
          style={{ marginTop: "30px", marginBottom: "30px" }}
        >
          <button
            style={{
              backgroundColor: "rgb(255 65 65)",
              height: "30px",
              borderRadius: "5px",
              border: "none",
            }}
          >
            Shop Now
          </button>
        </div>
        <div className="socialApp">
          <p>availble on</p>
          <div className="logos">
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <FaAmazon style={{ fontSize: "50px", paddingTop: "5px" }} />
              <SiFlipkart style={{ fontSize: "50px" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="image" style={{ width: "30vw" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsBBSIUkSdxKAwUor44B1w7AHjJyCBJGEAb7JpLz2cgA&s"
          alt="Shooe"
          style={{ width: "30vw", height: "55vh" }}
        />
      </div>
    </main>
  );
};

export default Main;
