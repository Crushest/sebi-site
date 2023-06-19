import { Link } from "react-router-dom";

import classes from "./MainHeader.module.css";
import logo from "../img/Crushest.png";

function MainHeader() {
  return (
    <header className={classes.header}>
      <Link to="/create-post" className={classes.button}>
        Home
      </Link>
      <Link to="/create-post" className={classes.button}>
        Blog
      </Link>
      <img src={logo} className={classes.logo} />
      <Link to="/create-post" className={classes.button}>
        Projects
      </Link>
      <Link to="/create-post" className={classes.button}>
        Contact Me
      </Link>
    </header>
  );
}

export default MainHeader;
