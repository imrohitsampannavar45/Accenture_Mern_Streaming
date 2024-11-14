import React from "react";
import JSx_Demo from "./Jsx";
import Demo from "./Jsx";
import Demo2 from "./Jsx_demo";
import Mobiles from "./Mobiles";
import Props_Demo from "./props_Demo";
import MyDetails from "./Props_example";

const App = () => {
  return (
    <div className="container">
      <Demo />
      <Demo2 />
      <Mobiles />
      <Props_Demo yourName="Rohit Sampannavar" />
      <h1> Props Example </h1>
      <MyDetails name="Rohit" location="Bengaluru" company="Accenture" />
    </div>
  );
};

export default App;
