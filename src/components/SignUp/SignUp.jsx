import React from "react";
import { useForm } from "react-hook-form";
import s from "./SignUp.module.css";

// const sendData = async () => {
//   const response = await fetch("././store.js", {
//     method: "POST",
//     body: JSON.stringify({
//       name: data.name,
//       password: data.password,
//       email: data.email,
//       terms: data.email,
//     }),
//   });
//   const data = await response.json();
//   console.log(data, "server");
// };
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
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
