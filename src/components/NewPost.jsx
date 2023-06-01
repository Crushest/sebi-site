import classes from "./NewPost.module.css";

function NewPost(props) {
  

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={2} onChange={props.onBodyChange} />
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Date</label>
        <input type="month" id="name" required onChange={props.onDateChange} />
      </p>
      <p>{enteredDate}</p>
    </form>
  );
}

export default NewPost;
