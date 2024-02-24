import "./Header.css";
import { Link } from "react-router-dom";
//
function Header() {
  return (
    <nav className="header">
      <Link to="/">Re:Zero</Link>
      <Link to="/home">Home</Link>
    </nav>
  );
}
// Explort
export default Header;
