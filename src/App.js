import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Search from "./components/Search";
import CardDisplays from "./components/CardDisplay";
import ViewAllQueens from "./components/ViewAllQueens";
import ViewAllQueensHeader from "./components/ViewAllQueensHeader";
import Modal from "./components/Modal";
import React, { useState } from "react";
import "./appStyle.css";

function App() {
  const [allQueens, setAllQueens] = React.useState([]);

  React.useEffect(function () {
    fetch(`http://www.nokeynoshade.party/api/queens/all`)
      .then((res) => res.json())
      .then((data) => setAllQueens(data));
  }, []);

  const [mySelectedQueens, setMySelectedQueens] = React.useState(
    JSON.parse(localStorage.getItem("mySelectedQueens")) || []
  );

  React.useEffect(() => {
    localStorage.setItem("mySelectedQueens", JSON.stringify(mySelectedQueens));
  }, [mySelectedQueens]);

  const [tooManyQueensMessage, setTooManyQueensMessage] = React.useState(false);

  function addNewQueen(queenId) {
    // -----------------++ LEAVE IN FOR REFERENCE ON WHAT THE FIND F(X) IS DOING ++--------------
    // const randomNumber = Math.floor(Math.random() * allQueens.length);
    // let foundQueen;
    // for (let i = 0; i <= allQueens.length - 1; i++) {
    //   if (allQueens[i].id === queenId) {
    //     console.log(allQueens[i]);
    //     foundQueen = allQueens[i];
    //   }
    // }
    // ******************************************************************************************
    if (mySelectedQueens.length <= 4) {
      const findSelectedQueen = allQueens.find(function (
        theQueenThatIsCurrentlyBeingIndexed
      ) {
        return theQueenThatIsCurrentlyBeingIndexed.id === queenId;
      });
      console.log(findSelectedQueen);
      const certainQueenId = findSelectedQueen.id;
      const certainQueenImage = findSelectedQueen.image_url;
      const certainQueenName = findSelectedQueen.name;
      const certainQueenWinnerStatus = findSelectedQueen.winner;
      const certainQueenCongenialStatus = findSelectedQueen.missCongeniality;
      const certainQueenQuote = findSelectedQueen.quote;
      const newQueen = {
        selectedQueenId: certainQueenId,
        selectedQueenImage: certainQueenImage,
        selectedQueenName: certainQueenName,
        selectedQueenWinnerStatus: certainQueenWinnerStatus ? "Yes" : "No",
        selectedQueenCongenialStatus: certainQueenCongenialStatus
          ? "Yes"
          : "No",
        selectedQueenQuote: certainQueenQuote,
      };
      setMySelectedQueens((prevQueen) => [...prevQueen, newQueen]);
    } else {
      console.log("There are too many queens, chop one before you add another");
      console.log(tooManyQueensMessage);
      setTooManyQueensMessage(true);
    }
  }

  function removeNewQueen(queenId) {
    const findSelectedQueenToRemove = mySelectedQueens.find(function (
      theQueenThatIsCurrentlyBeingIndexed
    ) {
      return theQueenThatIsCurrentlyBeingIndexed.selectedQueenId === queenId;
    });
    console.log(findSelectedQueenToRemove);
    console.log(mySelectedQueens.indexOf(findSelectedQueenToRemove));
    const indexOfMySelectedQueensSashay = mySelectedQueens.indexOf(
      findSelectedQueenToRemove
    );
    const newStateWithQueenRemoved = mySelectedQueens.splice(
      indexOfMySelectedQueensSashay,
      1
    );
    console.log(mySelectedQueens);
    setMySelectedQueens((prevQueen) => [...prevQueen]);
    console.log(tooManyQueensMessage);
  }

  const myQueenElements = mySelectedQueens.map((certainItem) => {
    return (
      <CardDisplays certainItem={certainItem} handleClick={removeNewQueen} />
    );
  });

  const gridQueenElements = allQueens.map((item) => {
    return <ViewAllQueens item={item} handleClick={addNewQueen} />;
  });

  // --------------------------

  return (
    <div>
      <Modal
        open={tooManyQueensMessage}
        onClose={() => setTooManyQueensMessage(false)}
      />
      {/* <button onClick={() => setTooManyQueensMessage(true)}>Modal</button> */}
      <Header />
      <Instructions />
      <Search />
      {/* <button onClick={localStorage.clear()}>clear queens</button> */}
      <div className="appMyQueensContainer">{myQueenElements}</div>
      <ViewAllQueensHeader />
      {gridQueenElements}
    </div>
  );
}

export default App;
