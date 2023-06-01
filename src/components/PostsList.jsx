import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
    const [enteredBody, setEnteredBody]= useState("");
    const [enteredDate, setEnteredDate]= useState("");
 
  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeDateHandler(event) {
    setEnteredDate(event.target.value);
  }
  return (
    <>
        <NewPost onBodyChange={changeBodyHandler} onDateChange={changeDateHandler} />
        <ul className={classes.posts}>
        <Post author={enteredDate} text={enteredBody} />
        <Post author="Junior" text="Apple" />
        <Post author="Tom" text="Peach" />
        </ul>
    </>
  );
}

export default PostsList;