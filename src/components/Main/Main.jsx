import React from "react";
import s from "./Main.module.css";

const Main = () => {
  return (
    <div className={s.main}>
      <div className={s.mainText}>
        <p> Awaken your infinite potential</p>
        <div className={s.p2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </div>
      </div>
      <div className={s.button}>
        <button>Book a session</button>
      </div>
      <div className={s.pic1}>
        <img
          src="https://data.whicdn.com/images/323695432/original.jpg"
          alt=""
        />
      </div>
      <div className={s.pic2}>
        <img
          src="https://www.islandinstitute.org/wp-content/uploads/2020/07/aaa-bird-in-window.jpg"
          alt=""
        />
        <p>Is your life is prison or a palace? </p>
      </div>
    </div>
  );
};

export default Main;
