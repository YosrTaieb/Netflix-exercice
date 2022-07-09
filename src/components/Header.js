import netflix from "../images/netflix.png";
import "../styles/header.css";

function Header() {
  return (
    <header>
      <div className="container">
        <img className="logo" src={netflix} alt="logo" />
      </div>
    </header>
  );
}

export default Header;
