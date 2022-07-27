import React from "react";
import { useForm } from "react-hook-form";
import s from "./Login.module.css";

export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className={s.login}>
      <h1> Authorization</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input
            className={s.inputs}
            {...register("Name", { required: "Error!" })}
          />
          <div className={s.error}>
            {errors?.Name && <p>{errors?.Name?.message}</p>}
          </div>
        </div>
        <div>
          <label>Password:</label>
          <input
            className={s.inputs}
            {...register("Password", { required: "Error!" })}
          />
          <div className={s.error}>
            {errors?.Password && <p>{errors?.Password?.message}</p>}
          </div>
        </div>
        <div>
          <button className={s.but} type="submit">
            Send the form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
