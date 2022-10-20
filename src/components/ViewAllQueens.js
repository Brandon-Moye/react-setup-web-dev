import "./viewAllQueens.css";
import React from "react";

export default function ViewAllQueens(props) {
  return (
    <div className="queenContainer">
      <div className="ViewAllQueensContainer">
        <button
          onClick={() => {
            props.handleClick(props.item.id);
          }}
        >
          add
        </button>

        <div className="gridCell">{props.item.name}</div>
        <div className="gridCell">{props.item.winner ? "Yes" : "No"}</div>
        <div className="gridCell">
          {props.item.missCongeniality ? "Yes" : "No"}
        </div>
      </div>
    </div>
  );
}
