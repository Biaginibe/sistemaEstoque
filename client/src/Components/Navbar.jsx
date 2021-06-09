import "../Pages/Home/css/styles.css"
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar(/*nome*/) {
  return (
    <header className="navbarDesktop">
      <div className="links-container">
        <Link to="/" className="logo">
          Control-U
        </Link>
      
        {/* <p className="bemvindo">Bem vindo, nome | sair</p> */}
        <div className="logologout">
          <Link to="/">
              <FaSignOutAlt size={18} color={"white"} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
