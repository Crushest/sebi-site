import { Link } from "react-router-dom";

import classes from "./MainHeader.module.css";
import logo from "../img/Crushest-Logo.png";

function MainHeader() {
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.button}>
        Home
      </Link>
      <Link to="/blog" className={classes.button}>
        Blog
      </Link>
      <img src={logo} className={classes.logo} />
      <Link to="/projects" className={classes.button}>
        Projects
      </Link>
      <Link to="/contact" className={classes.button}>
        Contact Me
      </Link>
    </header>
  );
}

export default MainHeader;
