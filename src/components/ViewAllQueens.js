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
        <div className="buttonContainer">
          <button
            className="btn test-completed"
            onClick={() => {
              props.handleClick(props.item.id);
            }}
          >
            <div className="buttonTextContainer">
              {/* <span className="shantayButtonText">Shantay</span>
            <span className="youStayButtonText">You Stay</span> */}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
