import "./viewAllQueens.css";
import React from "react";

export default function ViewAllQueens(props) {
  // const [allQueens, setAllQueens] = React.useState([]);

  // React.useEffect(function () {
  //   fetch(`http://www.nokeynoshade.party/api/queens/all`)
  //     .then((res) => res.json())
  //     .then((data) => setAllQueens(data));
  // }, []);

  // console.log(allQueens);

  function handleClick() {
    console.log(props.item);
  }

  // const mapQueen = props.allQueens.map((item) => {
  //   return (item = { item });
  // });
  // ----------------------------------
  const myQueenElements = props.emptyQueens.map((queen) => (
    <p>{queen.whole}</p>
  ));
  // console.log(empt.whole);
  // console.log(myQueenElements);

  return (
    <div className="queenContainer">
      <div>{myQueenElements}</div>
      <div className="ViewAllQueensContainer">
        {/* <button onClick={props.newQueen}>+</button> */}

        <div className="gridCell">{props.item.name}</div>
        <div className="gridCell">{props.item.winner ? "Yes" : "No"}</div>
        <div className="gridCell">
          {props.item.missCongeniality ? "Yes" : "No"}
        </div>
        <button onClick={props.newQueen} className="gridCell">
          {props.item.id}
        </button>
      </div>
    </div>
  );
}
