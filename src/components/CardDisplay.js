import "./cardDisplaysStyle.css";
import React from "react";

export default function CardDisplays() {
  const [allQUeens, setAllQueens] = React.useState([]);

  React.useEffect(function () {
    fetch(`http://www.nokeynoshade.party/api/queens/all`)
      .then((res) => res.json())
      .then((data) => setAllQueens(data.data.memes));
  }, []);

  return (
    <div className="cardDisplaySectionContainer">
      <h3 className="myQueensContainerTitle">My Queens</h3>
      <div className="myQueensContainer">
        <div className="myQueen--1"></div>
        <div className="myQueen--2"></div>
        <div className="myQueen--3"></div>
        <div className="myQueen--4"></div>
        <div className="myQueen--5"></div>
      </div>
    </div>
  );
}
