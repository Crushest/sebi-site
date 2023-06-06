import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({onCancel, onAddPost}) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      date: enteredDate
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Date</label>
        <input type="month" id="name" required onChange={dateChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit" onSubmit={onAddPost}>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
