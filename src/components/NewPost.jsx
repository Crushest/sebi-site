import classes from "./NewPost.module.css";

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={2} onChange={props.changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Date</label>
        <input type="text" id="name" required onChange={props.changeDateHandler} />
      </p>
    </form>
  );
}

export default NewPost;
