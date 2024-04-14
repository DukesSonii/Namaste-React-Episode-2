import React from "react";
import { useState } from "react";
const User = (props) => {
  const [cnt, setcnt] = useState(0);
  return (
    <div>
      <h2>Count={cnt}</h2>

      <p>Name: {props.name}</p>
      <p>Location: {props.location}</p>
    </div>
  );
};

export default User;
