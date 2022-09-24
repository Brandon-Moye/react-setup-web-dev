import "./cardDisplaysStyle.css";
import React from "react";

export default function CardDisplays() {
  const [myFavQueens, setMyFavQueens] = React.useState({
    image: "",
    name: "",
    winner: "",
    congenial: "",
  });

  const [allQueens, setAllQueens] = React.useState([]);

  React.useEffect(function () {
    fetch(`http://www.nokeynoshade.party/api/queens/all`)
      .then((res) => res.json())
      .then((data) => setAllQueens(data));
  }, []);

  function phoo() {
    const randomNumber = Math.floor(Math.random() * allQueens.length);
    const newQueen = allQueens[randomNumber];
    setMyFavQueens((prevQueen) => ({
      ...prevQueen,
      image: newQueen.image_url,
      name: newQueen.name,
      winner: newQueen.winner ? "hunty" : "flop",
      congenial: newQueen.missCongeniality ? "Yes" : "No",
    }));
  }
  // const number = 0;
  // const newQueen = allQueens[number].name;
  // console.log(newQueen);
  return (
    <div className="cardDisplaySectionContainer">
      <h3 className="myQueensContainerTitle">My Queens</h3>
      <button onClick={phoo}>phoo</button>
      <div className="myQueensContainer">
        <div className="myQueen--1">
          <img src={myFavQueens.image} className="myQueen--1Image"></img>
          <p className="myQueen--1Name">Name: {myFavQueens.name}</p>
          <p className="myQueen--1IsWinner">Winner: {myFavQueens.winner}</p>
          <p className="myQueen--1IsCongenial">
            Congenial: {myFavQueens.congenial}
          </p>
        </div>
        <div className="myQueen--2"></div>
        <div className="myQueen--3"></div>
        <div className="myQueen--4"></div>
        <div className="myQueen--5"></div>
      </div>
    </div>
  );
}
