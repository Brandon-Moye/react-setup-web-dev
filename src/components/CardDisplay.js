import "./cardDisplaysStyle.css";
import React from "react";

export default function CardDisplays(props) {
  return (
    <div className="cardDisplayContainer">
      <div className="card">
        <img
          className="cardQueenImageProp"
          src={props.certainItem.selectedQueenImage}
        ></img>
        <div className="cardQueenNameProp">
          Name: {props.certainItem.selectedQueenName}
        </div>
        <div className="cardQueenWinnerProp">
          Winner: {props.certainItem.selectedQueenWinnerStatus}
        </div>
        <div className="cardQueenCongenialProp">
          Congenial: {props.certainItem.selectedQueenCongenialStatus}
        </div>
      </div>
    </div>
  );
}
