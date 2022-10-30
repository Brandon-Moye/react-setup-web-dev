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
          <strong>{props.certainItem.selectedQueenName}</strong>
        </div>
        <div className="cardQueenWinnerProp">
          <strong>Winner:</strong> {props.certainItem.selectedQueenWinnerStatus}
        </div>
        <div className="cardQueenCongenialProp">
          <strong>Congenial: </strong>
          {props.certainItem.selectedQueenCongenialStatus}
        </div>
        <i className="cardQueenQuoteProp">
          {props.certainItem.selectedQueenQuote}
        </i>
        <div className="buttonContainer">
          <button
            className="btn2 test-completed2"
            onClick={() => {
              props.handleClick(props.certainItem.selectedQueenId);
            }}
          ></button>
        </div>
      </div>
    </div>
  );
}
