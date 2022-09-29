import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Search from "./components/Search";
import CardDisplays from "./components/CardDisplay";
import React from "react";

function App() {
  const [allQueens, setAllQueens] = React.useState([]);

  React.useEffect(function () {
    fetch(`http://www.nokeynoshade.party/api/queens/all`)
      .then((res) => res.json())
      .then((data) => setAllQueens(data));
  }, []);

  const queenElements = allQueens.map((item) => {
    return <CardDisplays item={item} />;
  });
  return (
    <div>
      <Header />
      <Instructions />
      <Search />
      {queenElements}
    </div>
  );
}

export default App;
