import React from "react";


import Poster from "../Poster/Poster";
import Sidebar from "../Sidebar/Sidebar";
import Category from "../Categories/category"


const SingleCategory = () => {
  return (
    <>
      <Sidebar />
      <Poster />
      <Category />
    </>
  );
};

export default SingleCategory;