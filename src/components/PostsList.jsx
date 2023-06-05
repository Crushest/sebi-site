import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }
  return (
    <>
      <Modal>
      <NewPost
        changeBodyHandler={bodyChangeHandler}
        changeDateHandler={dateChangeHandler}
      />
      </Modal>
      <ul className={classes.posts}>
        <Post author={enteredDate} text={enteredBody} />
        <Post author="Junior" text="Apple" />
        <Post author="Tom" text="Peach" />
      </ul>
    </>
  );
}

export default PostsList;
