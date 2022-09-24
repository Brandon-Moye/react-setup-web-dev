import "./cardDisplaysStyle.css";

export default function CardDisplays() {
  return (
    <div className="cardDisplaySectionContainer">
      <h3 className="myQueensContainerTitle">My Queens</h3>
      <div className="myQueensContainer">
        <div className="myQueen--1"></div>
        <div className="myQueen--2"></div>
        <div className="myQueen--3"></div>
        <div className="myQueen--4"></div>
        <div className="myQueen--5"></div>
      </div>
    </div>
  );
}
