import React from "react";
import JSx_Demo from "./Jsx";
import Demo from "./Jsx";
import Demo2 from "./Jsx_demo";
import Mobiles from "./Mobiles";
import Props_Demo from "./props_Demo";

const App = () => {
  return (
    <div className="container">
      <Demo />
      <Demo2 />
      <Mobiles />
      <Props_Demo yourName="Rohit Sampannavar" />
    </div>
  );
};

export default App;
