import React from "react";
import { useForm } from "react-hook-form";
import s from "./Login.module.css";

export const Login = () => {
  const {
    register,
    formState: { error },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <div className={s.login}>
      <h1> Autorization</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input {...register("firstName", { required: "required field" })} />
        </label>
        <div className={s.nameError}>
          {error?.firstName && <p>{error?.firstName?.message || "Error!"}</p>}
        </div>
        <label>
          Last Name:
          <input {...register("lastName", { required: "required field" })} />
        </label>
        <div className={s.error}>
          {error?.lastName && <p>{error?.lastName?.message || "Error!"}</p>}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
