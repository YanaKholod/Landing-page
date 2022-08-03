import React, { useEffect, useState } from "react";
import s from "./About.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";

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
      {loader && (
        <CircularProgress
          size={68}
          sx={{
            color: green[500],
            position: "center",
            top: 20,
            left: 200,
            zIndex: 1,
          }}
        />
      )}
      <div className={s.postsWrapper}>
        {posts.map((posts) => (
          <div key={posts.id} className={s.aboutText}>
            <h3>{posts.title}</h3>
            <p>{posts.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default About;
