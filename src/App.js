import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Search from "./components/Search";
import CardDisplays from "./components/CardDisplay";
import ViewAllQueens from "./components/ViewAllQueens";
import React from "react";
import { nanoid } from "nanoid";

function App() {
  const [allQueens, setAllQueens] = React.useState([]);
  // const [gridQueens, setGridQueens] = React.useState([]);

  React.useEffect(function () {
    fetch(`http://www.nokeynoshade.party/api/queens/all`)
      .then((res) => res.json())
      .then((data) => setAllQueens(data));
  }, []);

  // React.useEffect(function () {
  //   fetch(`http://www.nokeynoshade.party/api/queens/all`)
  //     .then((res) => res.json())
  //     .then((data) => setGridQueens(data));
  // }, []);

  // console.log(allQueens);
  // const myQueenElements = allQueens.splice(0, 10).map((item) => {
  //   return <CardDisplays item={item} />;
  // });

  const [emptyQueens, setEmptyQueens] = React.useState(
    JSON.parse(localStorage.getItem("emptyQueens")) || []
  );

  React.useEffect(() => {
    localStorage.setItem("emptyQueens", JSON.stringify(emptyQueens));
  }, [emptyQueens]);

  function addNewQueen(queenId) {
    // const randomNumber = Math.floor(Math.random() * allQueens.length);
    // let foundQueen;
    // for (let i = 0; i <= allQueens.length - 1; i++) {
    //   if (allQueens[i].id === queenId) {
    //     console.log(allQueens[i]);
    //     foundQueen = allQueens[i];
    //   }
    // }
    const foundQueenShort = allQueens.find(function (
      theQueenThatIsCurrentlyBeingIndexed
    ) {
      return theQueenThatIsCurrentlyBeingIndexed.id === queenId;
    });
    const certainQueen = foundQueenShort.name;
    const newQueen = {
      id: nanoid(),
      whole: certainQueen,
    };
    setEmptyQueens((prevQueen) => [...prevQueen, newQueen]);
  }

  const myQueenElements = emptyQueens.map((certainItem) => {
    return <CardDisplays certainItem={certainItem} handleClick={onclick} />;
  });

  const gridQueenElements = allQueens.map((item) => {
    return <ViewAllQueens item={item} handleClick={addNewQueen} />;
  });

  // --------------------------

  return (
    <div>
      {/* <Header /> */}
      {/* <Instructions /> */}
      {/* <Search /> */}
      <button onClick={addNewQueen}>+</button>
      {myQueenElements}
      {/* <ViewAllQueens emptyQueens={emptyQueens} newQueen={addNewQueen} /> */}
      {/* {myQueenElements} */}
      {gridQueenElements}
    </div>
  );
}

export default App;
