import "./headerStyle.css";
export default function Header() {
  return (
    <div className="headerContainer">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <h1 className="pageTitle">QUEEN OF CARDS</h1>
      <a href="#" className="viewAllQueensButton">
        View All Queens
      </a>
    </div>
  );
}
