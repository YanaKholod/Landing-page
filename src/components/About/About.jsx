import React, { useEffect, useState } from "react";
import s from "./About.module.css";

const About = () => {
  const [posts, setPost] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPost(data);
      setLoader(false);
    };
    fetchData();
  }, []);
  return (
    <div className={s.aboutPage}>
      <h1>About</h1>
      {loader && "Loading..."}
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
