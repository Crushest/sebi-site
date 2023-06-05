import { useState } from "react";

import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalVisible, setModalVisible] = useState(true);

  function hideModalHandler() {
    setModalVisible(false);
  }

  function showModalHandler() {
    setModalVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList isPosting={modalVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
