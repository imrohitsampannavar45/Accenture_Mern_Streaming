import React from "react";

function MyDetails(props) {
  return (
    <div>
      <h3>My Name is {props.name}</h3>
      <h3>My Joining Location is {props.location}</h3>
      <h3>Muy Current Company is {props.company}</h3>
    </div>
  );
}
export default MyDetails;
