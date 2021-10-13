import React, { useState } from "react";

function Card(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.name}</li>
    </div>
  );
}
export default Card;
