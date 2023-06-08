import { useState } from "react";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal";

function NewPost({ onCancel, onAddPost }) {
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
      date: enteredDate,
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={2} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Date</label>
          <input type="text" id="name" required onChange={dateChangeHandler} />
        </p>
        <p className={classes.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" onSubmit={onAddPost}>
            Submit
          </button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
