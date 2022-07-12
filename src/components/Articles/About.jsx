import React, { useEffect, useState } from "react";
import s from "./About.module.css";

const About = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPost(data);
    };
    fetchData();
  }, []);
  return (
    <div className={s.aboutPage}>
      <h1>About</h1>
      <div className={s.postsWrapper}>
        {posts.map((posts) => (
          <div className={s.aboutText}>
            <h3>{posts.title}</h3>
            <p>{posts.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default About;
