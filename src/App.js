import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Search from "./components/Search";
import CardDisplays from "./components/CardDisplay";
import ViewAllQueens from "./components/ViewAllQueens";
import React from "react";
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
      selectedQueenCongenialStatus: certainQueenCongenialStatus ? "Yes" : "No",
      selectedQueenQuote: certainQueenQuote,
    };
    setMySelectedQueens((prevQueen) => [...prevQueen, newQueen]);
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
    setMySelectedQueens(mySelectedQueens);
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
      <Header />
      <Instructions />
      <Search />
      {/* <button onClick={localStorage.clear()}>clear queens</button> */}
      <div className="appMyQueensContainer">{myQueenElements}</div>
      {gridQueenElements}
    </div>
  );
}

export default App;
