import React from "react";
import Navbar from "../components/navbar/page";

const WithLayout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      {children}
      <footer>footer</footer>
    </div>
  );
};

export default WithLayout;
