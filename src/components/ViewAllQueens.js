import "./viewAllQueens.css";
import React from "react";

export default function ViewAllQueens(props) {
  return (
    <div className="queenContainer">
      <div className="ViewAllQueensContainer">
        <div className="queenNameInGrid gridCell">
          <strong>{props.item.name}</strong>
        </div>
        <div className="gridCell">{props.item.winner ? "Yes" : "No"}</div>
        <div className="gridCell">
          {props.item.missCongeniality ? "Yes" : "No"}
        </div>
        <button
          className="shantayYouStayButton"
          onClick={() => {
            props.handleClick(props.item.id);
          }}
        >
          <span className="shantayButton">Shantay</span>
        </button>
      </div>
    </div>
  );
}
