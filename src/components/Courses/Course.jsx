import React from "react";
import { useParams } from "react-router-dom";
import {state} from "../store";

const Course = () => {
  const { id } = useParams();
  const post = state[id-1];

  return (
      <div>
        <p>{post.title}</p>
        <div>{post.content}</div>
      </div>
  );
};

export default Course;
