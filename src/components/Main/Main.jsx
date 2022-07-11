import React from "react";
import s from "./Main.module.css";

const Main = () => {
  return (
    <div className={s.main}>
      <div className={s.mainText}>
        <p1> Awaken your infinite potential</p1>
        <p2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </p2>
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
          src="https://www.birdspot.co.uk/wp-content/uploads/2019/10/birds-window.jpg"
          alt=""
        />
        <p className={s.pic2Text}>Is your life is prison or a palace? </p>
      </div>
    </div>
  );
};

export default Main;
