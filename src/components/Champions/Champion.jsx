import React from "react";
import { useParams } from "react-router-dom";

const Champion = () => {
  const location = useParams();
  console.log(location);
  return <div>Champion</div>;
};

export default Champion;
