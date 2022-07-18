import React from "react";
import { state } from "../store";
import s from "./Courses.module.css";
import { Link } from "react-router-dom";
const Courses = () => {
  return (
    <div className={s.courseWrapper}>
      <h1>Courses</h1>
      <div className={s.courses}>
        {state.map((item, idx) => (
          <div className={s.aboutText}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div className={s.links}>
              <Link to={"course/" + item.id}>Read more</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
