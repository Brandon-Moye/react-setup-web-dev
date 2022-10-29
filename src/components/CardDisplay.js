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
        <button
          className="sashayAwayMyQueenButton"
          onClick={() => {
            props.handleClick(props.certainItem.selectedQueenId);
          }}
        >
          <span>Sashay</span>
        </button>
      </div>
    </div>
  );
}
