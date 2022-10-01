import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Search from "./components/Search";
import CardDisplays from "./components/CardDisplay";
import ViewAllQueens from "./components/ViewAllQueens";
import React from "react";
import { nanoid } from "nanoid";

function App() {
  const [allQueens, setAllQueens] = React.useState([]);
  const [gridQueens, setGridQueens] = React.useState([]);

  React.useEffect(function () {
    fetch(`http://www.nokeynoshade.party/api/queens/all`)
      .then((res) => res.json())
      .then((data) => setAllQueens(data));
  }, []);

  React.useEffect(function () {
    fetch(`http://www.nokeynoshade.party/api/queens/all`)
      .then((res) => res.json())
      .then((data) => setGridQueens(data));
  }, []);

  // console.log(allQueens);
  // const myQueenElements = allQueens.splice(0, 10).map((item) => {
  //   return <CardDisplays item={item} />;
  // });

  const [emptyQueens, setEmptyQueens] = React.useState([""]);

  const myQueenElements = emptyQueens.map((certainItem) => {
    return (
      <CardDisplays
        certainItem={certainItem}
        handleClick={onclick}
        emptyQueens={emptyQueens}
        newQueen={addNewQueen}
      />
    );
  });

  const gridQueenElements = gridQueens.map((item) => {
    return <ViewAllQueens item={item} />;
  });

  // --------------------------

  function addNewQueen() {
    const randomNumber = Math.floor(Math.random() * allQueens.length);
    const certainQueen = allQueens[randomNumber].name;
    const newQueen = {
      id: nanoid(),
      whole: certainQueen,
    };
    setEmptyQueens((prevQueen) => [...prevQueen, newQueen]);
  }
  return (
    <div>
      <Header />
      <Instructions />
      <Search />
      <button onClick={addNewQueen}>+</button>
      {myQueenElements}
      {/* <ViewAllQueens emptyQueens={emptyQueens} newQueen={addNewQueen} /> */}
      {/* {myQueenElements} */}
      {gridQueenElements}
    </div>
  );
}

export default App;
