import "./cardDisplaysStyle.css";
import React from "react";

export default function CardDisplays(props) {
  return (
    <div className="cardDisplayContainer">
      <div className="card">
        <div className="cardQueenNameProp">
          {props.certainItem.selectedQueenName}
        </div>
        <div className="cardQueenWinnerProp">
          {props.certainItem.selectedQueenWinnerStatus}
        </div>
        <div className="cardQueenCongenialProp">
          {props.certainItem.selectedQueenCongenialStatus}
        </div>
      </div>
    </div>
  );
}
