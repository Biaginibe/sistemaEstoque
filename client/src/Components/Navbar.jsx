import {
    FaUser,
    FaChartBar,
    FaUserCog,
    FaQuestionCircle,
  } from "react-icons/fa";
  import { Link } from "react-router-dom";
  
  function Navbar() {
    //consumo de contexto global com dados do usuário logado
  
    return (
      <header className="navbar">
        <Link to="/home">Control_U</Link>
        <Link to="/home">
          <FaUser />
        </Link>
      </header>
    );
  }
  export default Navbar;
  