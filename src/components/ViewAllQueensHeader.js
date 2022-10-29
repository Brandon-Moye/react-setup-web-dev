import "./ViewAllQueensHeader.css";
import React from "react";

export default function ViewAllQueensHeader() {
  return (
    <div className="ViewAllQueensHeaderContainer">
      <div className="nameTitle">Name</div>
      <div className="winnerTitle">Winner</div>
      <div className="congenialTitle">Miss Congeniality</div>
      <div className="addQueenTitle">Add Queen to Deck</div>
    </div>
  );
}
