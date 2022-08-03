import React from "react";
import { useForm } from "react-hook-form";
import s from "./SignUp.module.css";
import { useState, useEffect } from "react";
// function setLocal() {
//   localStorage.setItem("authorized", "true")};
// let preloadedState
// const persistedTodosString = localStorage.getItem('todos')

// if (persistedTodosString) {
//   preloadedState = {
//     todos: JSON.parse(persistedTodosString)
//   }
// }

const SignUp = () => {
  const [userData, setUserData] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    reset();
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setUserData(data);
    };
    fetchData();
  });
  return (
    <div className={s.signup}>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input
            className={s.inputs}
            {...register("Name", { required: "Error!" })}
          ></input>
          <div className={s.error}>
            {errors?.Password && <p>{errors?.Name?.message}</p>}
          </div>
        </div>
        <div>
          <label>Password:</label>
          <input
            className={s.inputs}
            {...register("Password", { required: "Error!" })}
          ></input>
          <div className={s.error}>
            {errors?.Password && <p>{errors?.Password?.message}</p>}
          </div>
        </div>
        <div>
          <label>Email:</label>
          <input
            className={s.inputs}
            {...register("Email", { required: "Error!" })}
          ></input>
          <div className={s.error}>
            {errors?.Email && <p>{errors?.Password?.message}</p>}
          </div>
        </div>
        <div>
          <label>Accepting the terms:</label>
          <input
            type="checkbox"
            {...register("Submit", { required: "Error!" })}
          ></input>
        </div>
        <div>
          <button className={s.but} type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
