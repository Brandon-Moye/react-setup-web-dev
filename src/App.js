import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Search from "./components/Search";
import CardDisplays from "./components/CardDisplay";
import ViewAllQueens from "./components/ViewAllQueens";
import React from "react";
import { nanoid } from "nanoid";

function App() {
  const [allQueens, setAllQueens] = React.useState([]);

  React.useEffect(function () {
    fetch(`http://www.nokeynoshade.party/api/queens/all`)
      .then((res) => res.json())
      .then((data) => setAllQueens(data));
  }, []);

  console.log(allQueens);
  // const myQueenElements = allQueens.splice(0, 10).map((item) => {
  //   return <CardDisplays item={item} />;
  // });

  // const gridQueenElements = allQueens.splice(11, 21).map((item) => {
  //   return <ViewAllQueens item={item} handleClick={onclick} />;
  // });

  // --------------------------
  const [emptyQueens, setEmptyQueens] = React.useState([]);

  function addNewQueen() {
    const certainQueen = [allQueens[2].name];
    const newQueen = {
      id: nanoid(),
      body: "Tammy",
      whole: certainQueen,
    };
    setEmptyQueens((prevQueen) => [newQueen, ...prevQueen]);
  }
  return (
    <div>
      <Header />
      <Instructions />
      <Search />
      <ViewAllQueens emptyQueens={emptyQueens} newQueen={addNewQueen} />
      {/* {myQueenElements} */}
      {/* {gridQueenElements} */}
    </div>
  );
}

export default App;
