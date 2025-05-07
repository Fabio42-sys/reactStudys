import { FaCog, FaUserCircle, FaReact } from "react-icons/fa";
import "./header.css";

function Header() {
  return (
    <header>
      <nav>
        <p>
            Set, delete and edit your users. created using react
            <FaReact />
        </p>
        
        <div className="icons">
          <FaCog />
          <FaUserCircle />
        </div>
      </nav>
    </header>
  );
}

export default Header;