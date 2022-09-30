import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Search from "./components/Search";
import CardDisplays from "./components/CardDisplay";
import ViewAllQueens from "./components/ViewAllQueens";
import React from "react";

function App() {
  const [allQueens, setAllQueens] = React.useState([]);

  React.useEffect(function () {
    fetch(`http://www.nokeynoshade.party/api/queens/all`)
      .then((res) => res.json())
      .then((data) => setAllQueens(data));
  }, []);

  const myQueenElements = allQueens.map((item) => {
    return <CardDisplays item={item} />;
  });

  const gridQueenElements = allQueens.map((item) => {
    return <ViewAllQueens item={item} handleClick={onclick} />;
  });
  return (
    <div>
      <Header />
      <Instructions />
      <Search />
      {myQueenElements}
      {gridQueenElements}
    </div>
  );
}

export default App;
