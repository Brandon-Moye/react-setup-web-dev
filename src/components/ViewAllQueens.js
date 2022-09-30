import "./viewAllQueens.css";
import React from "react";

export default function ViewAllQueens(props) {
  function handleClick() {
    return console.log("clicked");
  }
  return (
    <div className="ViewAllQueensContainer">
      <div className="gridCell">{props.item.name}</div>
      <div className="gridCell">{props.item.winner ? "Yes" : "No"}</div>
      <div className="gridCell">
        {props.item.missCongeniality ? "Yes" : "No"}
      </div>
      <button onClick={handleClick} className="gridCell">
        {props.item.id}
      </button>
    </div>
  );
}
