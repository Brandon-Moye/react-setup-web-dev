import "./cardDisplaysStyle.css";
import React from "react";

export default function CardDisplays() {
  const [myFavQueens, setMyFavQueens] = React.useState([
    // id: "",
    // image: "",
    // queenName: "",
    // winner: "",
    // congenial: "",
  ]);

  const [allQueens, setAllQueens] = React.useState([]);

  React.useEffect(function () {
    fetch(`http://www.nokeynoshade.party/api/queens/all`)
      .then((res) => res.json())
      .then((data) => setAllQueens(data));
  }, []);

  function generateARandonQueen() {
    const randomNumber = Math.floor(Math.random() * allQueens.length);
    const newQueen = allQueens[randomNumber];
    // console.log(newQueen);
    // setMyFavQueens((prevQueen) => [newQueen, ...prevQueen]);
    // console.log(myFavQueens);
    setMyFavQueens((prevQueen) => [
      ...prevQueen,
      newQueen,
      // id: newQueen.id,
      // image: newQueen.image_url,
      // queenName: newQueen.name,
      // winner: newQueen.winner ? "Yes" : "No",
      // congenial: newQueen.missCongeniality ? "Yes" : "No",
    ]);
    console.log(myFavQueens);
  }
  // const number = 0;
  // const newQueen = allQueens[number].name;
  // console.log(newQueen);
  return (
    <div className="cardDisplaySectionContainer">
      <h3 className="myQueensContainerTitle">My Queens</h3>
      <button onClick={generateARandonQueen}>generateARandonQueen</button>
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
