import React from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const LayoutLanding = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default LayoutLanding;
