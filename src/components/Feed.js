import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import { db } from "../firebase";
import {
  collection,
  query,
  getDocs,
  setDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import EventIcon from "@mui/icons-material/Event";
import NewspaperIcon from "@mui/icons-material/Newspaper";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    async function fetchData() {
      const q = query(collection(db, "posts"));
      const querySnapshot = await getDocs(q);
      const newPosts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        message: doc.data().message,
        description: doc.data().description,
      }));
      setPosts(newPosts);
    }
    fetchData();
    console.log(posts);
  }, []);

  async function sendPost(e) {
    e.preventDefault();
    console.log(input);
    await setDoc(doc(db, "posts", "2342"), {
      name: "Simon",
      description: "test",
      message: input,
      photoUrl: "",
      timestamp: serverTimestamp(),
    });
    setInput("");
  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={InsertPhotoIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={VideoLabelIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={NewspaperIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      {posts.map((post) => (
        <Post
          key={post.id}
          name={post.name}
          message={post.message}
          description={post.description}
        />
      ))}
      <Post
        name="Simon Yu"
        description="Testing"
        message="This is the first post"
      />
    </div>
  );
}

export default Feed;
