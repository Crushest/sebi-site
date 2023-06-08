import classes from "./Post.module.css";
import { Link } from "react-router-dom";

function Post({id, date, body}) {
  return (
    <li className={classes.post}>
      <Link to={id}>
      <p className={classes.author}> {date} </p>
      <p className={classes.text}> {body} </p>
      </Link>
    </li>
  );
}

export default Post;
