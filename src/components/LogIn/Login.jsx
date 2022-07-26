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
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <div className={s.login}>
      <h1> Authorization</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First name:</label>
        <input
          className={s.inputs}
          {...register("firstName", { required: "required field" })}
        />
        <div className={s.error}>
          {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
        </div>
        <label>Last name:</label>
        <input
          className={s.inputs}
          {...register("lastName", { required: "required field" })}
        />
        <div className={s.error}>
          {errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}
        </div>
        <input type="Submit" value="Send the form" />
      </form>
    </div>
  );
};

export default Login;
