import React from "react";
import Demo from "./Jsx";
import Demo2 from "./Jsx_demo";
import Mobiles from "./Mobiles";
import Props_Demo from "./props_Demo";
import MyDetails from "./Props_example";
import State_Demo from "./State_Demo";
import Constructor_Demo from "./Contructor_Demo";
import GetDerivedState from "./GetDerivedState";
import ShouldComponentUpdates from "./ShouldComUpdate";

const App = () => {
  return (
    <div className="container">
      <Demo />
      <Demo2 />
      <Mobiles />
      <Props_Demo yourName="Rohit Sampannavar" />
      <h1> Props Example </h1>
      <MyDetails name="Rohit" location="Bengaluru" company="Accenture" />
      <hr />
      <State_Demo />
      <hr />
      <Constructor_Demo />
      <hr />
      <GetDerivedState fcolor="Blue" />
      <hr />
      <ShouldComponentUpdates />
    </div>
  );
};

export default App;
