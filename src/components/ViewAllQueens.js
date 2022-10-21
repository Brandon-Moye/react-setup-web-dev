import "./viewAllQueens.css";
import React from "react";

export default function ViewAllQueens(props) {
  return (
    <div className="queenContainer">
      <div className="ViewAllQueensContainer">
        <div className="gridCell">{props.item.name}</div>
        <div className="gridCell">{props.item.winner ? "Yes" : "No"}</div>
        <div className="gridCell">
          {props.item.missCongeniality ? "Yes" : "No"}
          <button
            onClick={() => {
              props.handleClick(props.item.id);
            }}
          >
            Shantay You Stay
          </button>
        </div>
      </div>
    </div>
  );
}
