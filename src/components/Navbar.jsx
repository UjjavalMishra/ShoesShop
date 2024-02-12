import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "			#046169",
        flexWrap: "wrap",
      }}
    >
      <div className="logo" style={{ height: "60px", paddingLeft: "15px" }}>
        <img src="https://img.freepik.com/premium-vector/gradient-colored-track-field-logo_23-2149207347.jpg?w=740" alt="logo" style={{ height: "100%" }} />
      </div>
      <div className="menu">
        <ul style={{ display: "flex", listStyle: "none", color: "white" }}>
          <li style={{ marginRight: "20px" }}>Menu</li>
          <li style={{ marginRight: "20px" }}>Location</li>
          <li style={{ marginRight: "20px" }}>About</li>
          <li style={{ marginRight: "20px" }}>Contact</li>
        </ul>
      </div>
      <div
        className="buttons"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          className="signIn"
          style={{
            width: "70px",
            height: "30px",
            borderRadius: "5px",
            backgroundColor: "#d43232",
            marginRight: "20px",
            color: "white",
            border: "none",
          }}
        >
          sign in
        </button>
        <button
          style={{
            width: "70px",
            height: "30px",
            borderRadius: "5px",
            backgroundColor: "#d43232",
            marginRight: "20px",
            color: "white",
            border: "none",
          }}
        >
          sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
