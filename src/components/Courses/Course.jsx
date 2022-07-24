import React from "react";
import { useParams } from "react-router-dom";
import { state } from "../store";
import s from "./Course.module.css";
const Course = () => {
  const { id } = useParams();
  const post = state[id];

  return (
    <div className={s.allCourse}>
      <h1>{post.title}</h1>
      <div className={s.content}>{post.content}</div>
      <div className={s.description}>{post.description}</div>
    </div>
  );
};

export default Course;
