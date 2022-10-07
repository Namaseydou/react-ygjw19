import React from 'react';
import axios from 'axios';
import './style.css';

const baseURL = 'https://jsonplaceholder.typicode.com/posts/';

export default function App() {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: 'Hello Word!',
        body: 'This is an updated post.',
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return 'NO post!';
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={updatePost}>updated Post </button>
    </div>
  );
}
