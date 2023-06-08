import { useState, useEffect } from "react";

import NewPost from "../routes/NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsLoaded(true);
      const response = await fetch("http://localhost:8080/posts");
      const responseData = await response.json();
      setPosts(responseData.posts);
      setIsLoaded(false);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isLoaded && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} date={post.date} body={post.body} />
          ))}
        </ul>
      )}
      {!isLoaded && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No Posts Found</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isLoaded && (
        <p style={{ textAlign: "center", color: "white" }}>Loading posts...</p>
      )}
    </>
  );
}

export default PostsList;
