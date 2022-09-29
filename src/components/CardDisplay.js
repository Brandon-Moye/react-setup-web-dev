import "./cardDisplaysStyle.css";
import React from "react";

export default function CardDisplays(props) {
  return (
    <div className="cardDisplaySectionContainer">
      <h3 className="myQueensContainerTitle">My Queens</h3>
      <div className="myQueensContainer">
        <div className="myQueen--1">
          <img src={props.item.image_url} className="myQueen--1Image"></img>
          <p className="myQueen--1Name">Name: {props.item.name}</p>
          <p className="myQueen--1IsWinner">
            Winner: {props.item.winner ? "Yes" : "No"}
          </p>
          <p className="myQueen--1IsCongenial">
            Congenial: {props.item.missCongeniality ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </div>
  );
}
