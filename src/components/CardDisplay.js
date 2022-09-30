import "./cardDisplaysStyle.css";
import React from "react";

export default function CardDisplays(props) {
  return (
    <div className="cardDisplaySectionContainer">
      <div className="myQueensContainer">
        <div className="myQueen">
          <img src={props.item.image_url} className="myQueen--Image"></img>
          <p className="myQueen--Name">Name: {props.item.name}</p>
          <p className="myQueen--IsWinner">
            Winner: {props.item.winner ? "Yes" : "No"}
          </p>
          <p className="myQueen--IsCongenial">
            Congenial: {props.item.missCongeniality ? "Yes" : "No"}
          </p>
          <p className="myQueen--Quote">"{props.item.quote}"</p>
          <button className="myQueen--Id">Shantay {props.item.id}</button>
        </div>
      </div>
    </div>
  );
}
