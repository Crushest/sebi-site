import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} date={post.date} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
      <div style={{ textAlign: 'center', color: 'white' }} >
        <h2>No Posts Found</h2>
        <p>Start adding some!</p>
      </div>
    )}
    </>
  );
}

export default PostsList;
