import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Mike" text="Banana" />
      <Post author="Junior" text="Apple" />
      <Post author="Tom" text="Peach" />
    </ul>
  );
}

export default PostsList;