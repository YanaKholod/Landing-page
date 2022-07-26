import React from "react";
import { menu } from "./menu";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <img
          src="https://cdn.svgporn.com/logos/mida-icon.svg"
          alt=""
          height="45"
        />
      </div>
      <div className={s.wrapper}>
        <ul className={s.menu}>
          {menu.map((item, idx) => (
            <li key={item.id}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className={s.buttons}>
          <button className={s.butLogin}>
            <Link to="/login" className={s.link}>
              Login
            </Link>
          </button>
          <button className={s.butSignup}>
            <Link to="/signup" className={s.link}>
              Sign Up
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
