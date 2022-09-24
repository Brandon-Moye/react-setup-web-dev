import "./instructionStyle.css";

export default function Instructions() {
  return (
    <div className="instructionContainer">
      <p className="searchingQueenInfo">
        If you know a queen you want to add, type in their name and press enter
        to add it to your deck
      </p>
      <p className="viewAllQueensInfo">
        If you would like to see all the queens select the View All Queens
        button on the top right hand and you will be brought to a filterable
        data table.
      </p>
      <p className="APIRecognition">We are utilizing the No Key No Shade API</p>
    </div>
  );
}
