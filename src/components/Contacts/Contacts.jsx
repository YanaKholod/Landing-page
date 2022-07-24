import React from "react";
import s from "./Contacts.module.css";
import { contacts } from "../store";
const Contacts = () => {
  return (
    <div className={s.wrapper}>
      <h1> Contacts</h1>
      <ul>
        {contacts.map((item, idx) => (
          <li key={item.id}>
            <p className={s.comp}>{item.company}</p>
            <p className={s.name}>{item.name}</p>
            <p>City:{item.city}</p>
            <p>Phone:{item.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
