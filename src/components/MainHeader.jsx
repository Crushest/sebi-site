import { Link } from 'react-router-dom';

import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
        <Link to="/create-post" className={classes.button} >
          Home
        </Link>
        <Link to="/create-post" className={classes.button} >
          Blog
        </Link>
        <Link to="/create-post" className={classes.button} >
          Projects
        </Link>
        <Link to="/create-post" className={classes.button} >
          Social Media
        </Link>
    </header>
  );
}

export default MainHeader;