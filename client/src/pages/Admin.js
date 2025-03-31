import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((res) => setPosts(res.data));
  }, []);

  const createPost = async () => {
    await axios.post("http://localhost:5000/posts", { title, content });
    window.location.reload();
  };

  const deletePost = async (id) => {
    await axios.delete(`http://localhost:5000/posts/${id}`);
    window.location.reload();
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Content" onChange={(e) => setContent(e.target.value)} />
      <button onClick={createPost}>Create Post</button>
      <h3>All Posts</h3>
      {posts.map((post) => (
        <div key={post._id}>
          <h4>{post.title}</h4>
          <p>{post.content}</p>
          <button onClick={() => deletePost(post._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Admin;
